import { Header } from "../_components/header";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";
import { BookingItem } from "../_components/booking-item";
import { isFuture, isPast } from "date-fns";

const BookingsPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return redirect("/");
  }

  const bookingList = await db.booking.findMany({
    where: { userId: (session.user as any).id },
    include: {
      service: true,
      barbershop: true,
    },
  });

  const confirmedBookings = bookingList.filter((booking) =>
    isFuture(booking.date)
  );

  const finishedBookings = bookingList.filter((booking) =>
    isPast(booking.date)
  );
  return (
    <>
      <Header />
      <div className="px-5 py-6flex flex-col gap-3 mt-4 ">
        <h1 className="text-xl font-bold">Agendamentos</h1>
      </div>
      <div className="px-5 py-6 flex flex-col gap-3">
        <p className="text-gray-400 uppercase font-bold text-sm">Confirmados</p>
        {confirmedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
      <div className="px-5 py-6 flex flex-col gap-3">
        <p className="text-gray-400 uppercase font-bold text-sm">Finalizados</p>
        {finishedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </>
  );
};

export default BookingsPage;

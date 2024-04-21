import { format } from "date-fns";
import { Header } from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import { Search } from "./_component/search";
import { BookingItem } from "../_components/booking-item";
import { db } from "../_lib/prisma";
import { BarbershopItem } from "../_components/barbershop-item";
import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  const [barbershops, confirmedBookings] = await Promise.all([
    db.barbershop.findMany({ orderBy: { name: "asc" } }),

    session?.user
      ? db.booking.findMany({
          where: {
            userId: (session.user as any).id,
            date: {
              gte: new Date(),
            },
          },
          include: {
            service: true,
            barbershop: true,
          },
          orderBy: { date: "asc" },
        })
      : Promise.resolve([]),
  ]);

  return (
    <>
      <Header />
      <main>
        <div className="px-5 pt-5">
          <h2 className="text-xl font-bold">
            {session?.user
              ? `Olá, ${session.user.name?.split(" ")[0]}!`
              : "Olá! Vamos agendar um corte hoje?"}
          </h2>
          <p className="capitalize text-sm">
            {format(new Date(), "EEEE ',' d 'de' MMMM", { locale: ptBR })}
          </p>
        </div>
        <div className="px-5 mt-6">
          <Search />
        </div>

        <div className="mt-6">
          {confirmedBookings.length > 0 && (
            <>
              <h2 className="pl-5 text-xs mb-3 uppercase text-gray-400 font-bold">
                Próximo Agendamento
              </h2>
              <div className="px-5 flex gap-3">
                <BookingItem
                  key={confirmedBookings[0].id}
                  booking={confirmedBookings[0]}
                />
              </div>
            </>
          )}
        </div>

        <div className="px-5 mt-6">
          <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
            RECOMENDADOS
          </h2>
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <div key={barbershop.id} className="min-w-[167-px] max-w-[167px]">
                <BarbershopItem barbershop={barbershop} />
              </div>
            ))}
          </div>
        </div>
        <div className="px-5 mt-6 mb-6">
          <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">
            POPULARES
          </h2>
          <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <div key={barbershop.id} className="min-w-[167-px] max-w-[167px]">
                <BarbershopItem barbershop={barbershop} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

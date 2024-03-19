import { format } from "date-fns";
import { Header } from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import { Search } from "./_component/search";
import { BookingItem } from "../_components/booking-item";
import { db } from "../_lib/prisma";
import { BarbershopItem } from "../_components/barbershop-item";

export default async function Home() {

  const barbershops = await db.barbershop.findMany();


  return (
    <>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Ricardo!</h2>
        <p className="capitalize text-sm" >
          {format(new Date(), "EEEE ',' d 'de' MMMM", { locale: ptBR })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">AGENDAMENTOS</h2>
        <BookingItem />
      </div>
      <div className="px-5 mt-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">RECOMENDADOS</h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map((barbershop) =>
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            )
          }
        </div>
      </div>
      <div className="px-5 mt-6 mb-6">
        <h2 className="text-xs uppercase text-gray-400 font-bold mb-3">POPULARES</h2>
        <div className="flex gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {
            barbershops.map((barbershop) =>
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            )
          }
        </div>
      </div>
    </>
  );
}

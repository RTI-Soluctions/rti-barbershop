import { format } from "date-fns";
import { Header } from "../_components/header";
import { ptBR } from "date-fns/locale/pt-BR";
import Search from "./_component/search";
import { BookingItem } from "../_components/booking-item";

export default function Home() {
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
    </>
  );
}

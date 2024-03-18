import { format } from "date-fns";
import { Header } from "../_components/header/header";
import { ptBR } from "date-fns/locale/pt-BR";
import Search from "./_component/search";

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
    </>
  );
}

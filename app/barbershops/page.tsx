import { BarbershopItem } from "../_components/barbershop-item";
import { Header } from "../_components/header";
import { db } from "../_lib/prisma";

interface BarbershopPageProps {
  searchParams: {
    search: string;
  };
}

const BarbershopPage = async ({ searchParams }: BarbershopPageProps) => {
  const barbershops = await db.barbershop.findMany({
    where: {
      name: {
        contains: searchParams.search,
        mode: "insensitive",
      },
    },
  });
  return (
    <>
      <Header />
      <div className="px-5 py-6 flex flex-col gap-6">
        <h1 className="text-gray-400 font-bold text-xs uppercase">
          Resustados para &quot;{searchParams.search}&quot;
        </h1>
        <div className="flex flex-wrap gap-4 max-w-[full - 12px]">
          {barbershops.map((barbershop) => (
            <div key={barbershop.id}>
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BarbershopPage;

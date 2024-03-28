import { CalendarIcon, HomeIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const SheetContentButtons = () => {
  return (
    <div className="p-5 mt-8 items-center flex flex-col gap-2">
      <Button
        className="h-10 w-full gap-2 p-4 flex justify-start"
        variant="outline"
        size="lg"
        asChild
      >
        <Link href="/">
          <HomeIcon size={22} />
          <p>Início</p>
        </Link>
      </Button>
      <Button
        className="h-10 w-full p-4 gap-2 flex justify-start"
        variant="outline"
        size="lg"
        asChild
      >
        <Link href="/bookings">
          <CalendarIcon size={22} />
          <p>Agendamentos</p>
        </Link>
      </Button>
    </div>
  );
};

export default SheetContentButtons;

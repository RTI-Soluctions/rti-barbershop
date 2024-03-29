"use client";

import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { signIn } from "next-auth/react";

interface BookingsProps {
  isAuthenticated: boolean;
}

const Bookings = () => {
  const handleBookingClick = () => {
    // if (!isAuthenticated){
    //   return signIn("google")
    // }
    //TODO: Open modal de agendamento.
  };

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="secondary" onClick={handleBookingClick}>
            Reservar
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0">
          <SheetHeader>
            <SheetTitle className="text-left">Faça seu Login</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Bookings;

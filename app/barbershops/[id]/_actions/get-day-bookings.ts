"use server";

import { db } from "@/app/_lib/prisma";
import { Barbershop } from "@prisma/client";
import { endOfDay, startOfDay } from "date-fns";

export const getDayBookings = (barbershopId: string, date: Date) => {
  const bookings = db.booking.findMany({
    where: {
      barbershopId,
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  });

  return bookings;
};

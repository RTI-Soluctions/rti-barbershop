"use server"

import { db } from "@/app/_lib/prisma";
import { endOfDay, startOfDay } from "date-fns";

export const getDayBookings = (date: Date) => {
  const bookings = db.booking.findMany({
    where: {
      date: {
        lte: endOfDay(date),
        gte: startOfDay(date),
      },
    },
  });

  return bookings;
};

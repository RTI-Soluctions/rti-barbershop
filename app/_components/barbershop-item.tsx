"use client"

import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

export const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {

    const router = useRouter();

    const handleBookingClick = () => {
        router.push(`barbershops/${barbershop.id}`)
    };

    return (
        <Card className="min-w-[167-px] max-w-[167px] rounded-2xl">
            <CardContent className="p-1">
                <div className="px-1 relative w-full h-[9.9375rem]">
                    <div className="absolute top-2 left-3 z-50">
                        <Badge variant="secondary" className="flex items-center gap-1 opacity-90">
                            <StarIcon size={10} className=" fill-primary text-primary" />
                            <span className="text-Fxs">5.0</span>
                        </Badge>
                    </div>
                    <Image
                        src={barbershop.imageUrl}
                        alt={barbershop.name}
                        style={{ objectFit: "cover", }}
                        fill
                        className="rounded-2xl" />

                </div>
                <div className="px-3">
                    <h2 className="font-bold overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
                    <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
                    <Button className="w-full mt-3" variant="secondary" onClick={handleBookingClick}>Reservar</Button>
                </div>
            </CardContent>
        </Card>
    );
}

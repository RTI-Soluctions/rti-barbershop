import { Barbershop } from "@prisma/client";
import { Card, CardContent } from "./ui/card";

interface BarbershopItemProps {
    barbershop: Barbershop;
}

export const BarbershopItem = ({barbershop}: BarbershopItemProps) => {

    return ( 
        <Card>
            <CardContent className="">
                <h1>{barbershop.name}</h1>
            </CardContent>
        </Card>
     );
}
 
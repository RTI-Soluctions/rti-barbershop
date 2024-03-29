import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

export const BookingItem = () => {
    return (
        <Card> 
            <CardContent className="p-5 flex justify-between py-0">
                <div className="flex flex-col gap-1 py-4">
                    <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
                        Confirmado
                    </Badge>
                    <h2 className="font-bold">Corte de Cabelo</h2>
                    <div className="flex items-center gap-2">
                        <Avatar>
                            <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
                            <AvatarFallback>Avatar</AvatarFallback>
                        </Avatar>
                        <h3 className="text-sm">Vintage Barber</h3>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center border-l border-solid border-secondary pl-5">
                    <p className="text-sm">Fevereiro</p>
                    <p className="text-3xl">06</p>
                    <p className="text-sm">09:45</p>
                </div>
            </CardContent>
        </Card>
    );
}


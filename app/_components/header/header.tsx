import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export const Header = () => {
    return (
        <Card className="w-full">
            <CardContent className="px-5 py-8 flex flex-row justify-between items-center">
                <Image src="/logo.png" alt="RTI Barbershop" height={15} width={100} />
                <Button className="h-10 w-10" variant="outline" size="icon">
                    <MenuIcon size={22} />
                </Button>
            </CardContent>
        </Card>
    );
}
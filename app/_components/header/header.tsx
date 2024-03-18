import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";

export const Header = () => {
    return (
        <Card>
            <CardContent>
                <Image src="/logo.png" alt="RTI Barbershop" height={15} width={100} />
                <Button variant="outline" size="icon">
                    <MenuIcon />
                </Button>

            </CardContent>

        </Card>
    );
}


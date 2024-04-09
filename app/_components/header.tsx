import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import SideMenu from "./side-menu";
import Link from "next/link";

export const Header = () => {
  return (
    <Card className="w-full">
      <CardContent className="px-5 py-8 flex flex-row justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="RTI Barbershop" height={10} width={90} />
        </Link>
        <SideMenu />
      </CardContent>
    </Card>
  );
};

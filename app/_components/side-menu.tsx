import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import SheetContentButtons from "./sheet-content-buttons";
import UserLoged from "./user-loged";

const SideMenu = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="h-10 w-10" variant="outline" size="icon">
            <MenuIcon size={22} />
          </Button>
        </SheetTrigger>
        <SheetContent className="p-0">
          <SheetHeader className="border-b border-solid border-secondary p-5">
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <UserLoged />
          <SheetContentButtons />
        </SheetContent>
      </Sheet>
    </>
  );
};

export default SideMenu;

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentIcon,
  HomeIcon,
  ListOrderedIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text=left text-lg font-semibold">
            Menu
          </SheetHeader>

          <div className="mt-2 flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-start gap-2">
              <LogInIcon size={18} />
              Fazer Login
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <HomeIcon size={18} />
              Início
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <PercentIcon size={18} />
              Ofertas
            </Button>

            <Button variant="outline" className="w-full justify-start gap-2">
              <ListOrderedIcon size={18} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-semibold">
        <span className="text-red-500">FSW</span> Store
      </h1>
      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;

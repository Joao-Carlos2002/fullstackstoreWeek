import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";

const Header = () => {
  return (
    <Card className="flex items-center justify-between p-[1.875rem]">
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>
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
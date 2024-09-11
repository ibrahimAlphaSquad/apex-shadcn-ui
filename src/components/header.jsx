import React from "react";
import { Input } from "./ui/input";
import { BellDot, SearchIcon, UserIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-4xl">Apex</h1>
        <p className="text-sm">Making Crypto fun again</p>
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex justify-center items-center space-x-4">
          <NavigationMenuItem>Trading</NavigationMenuItem>
          <NavigationMenuItem>Community</NavigationMenuItem>
          <NavigationMenuItem>Pumps</NavigationMenuItem>
          <NavigationMenuItem>Token</NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex justify-center items-center space-x-4">
        <div className="relative">
          <Input placeholder="Search" />
          <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        </div>
        <BellDot className="h-6 w-6" />
        <div className="flex items-center justify-center p-1 space-x-2">
          <UserIcon className="h-6 w-6" />
          <p>PP: 69,420</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

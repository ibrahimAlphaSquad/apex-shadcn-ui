import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { BellDot, SearchIcon, UserIcon } from "lucide-react";
// import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex flex-col items-start">
        <h1 className="font-bold text-4xl">Apex</h1>
        <p className="text-sm">Making Crypto fun again</p>
      </div>
      <div className="flex justify-center items-center space-x-4">
        <Button>Trading</Button>
        <Button>Community</Button>
        <Button>Pumps</Button>
        <Button>Token</Button>
      </div>
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
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>
              <UserIcon className="h-6 w-6" />
            </CardTitle>
            <CardDescription>PP: 69,420</CardDescription>
          </CardHeader>
        </Card> */}
      </div>
    </header>
  );
}

export default Header;

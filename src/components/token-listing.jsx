import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ScrollArea } from "@radix-ui/react-scroll-area";

function TokenListing() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <CardTitle>New Pairs</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px]">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center space-x-2 mb-2">
                <div className="h-4 w-4 rounded-full bg-muted" />
                <div className="w-10 h-4 bg-muted" />
                <div className="flex-1 h-4 bg-muted rounded" />
              </div>
            ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

export default TokenListing;

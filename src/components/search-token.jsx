import React from "react";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

function SearchToken() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Live Pumps: [Icons of the token]</CardTitle>
        <Button>Create Pump</Button>
      </CardHeader>
    </Card>
  );
}

export default SearchToken;

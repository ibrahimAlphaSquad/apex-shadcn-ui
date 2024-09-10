import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function Leaderboard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-center">
        <CardTitle>Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex items-center space-x-2 mb-2">
              <p>{i + 1}</p>
              <div className="h-4 w-4 rounded-full bg-muted" />
              <div className="flex-1 h-4 bg-muted rounded" />
            </div>
          ))}
      </CardContent>
    </Card>
  );
}

export default Leaderboard;

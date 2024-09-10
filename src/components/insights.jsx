import React from "react";
import TopClans from "./top-clans";
import Leaderboard from "./leaderboard";
import MemeHub from "./meme-hub";

function Insights() {
  return (
    <div className="flex flex-row w-full h-full space-x-4">
      <div className="w-3/4">
        <TopClans />
      </div>
      <div className="flex flex-col w-1/4 space-y-4">
        <Leaderboard />
        <MemeHub />
      </div>
    </div>
  );
}

export default Insights;

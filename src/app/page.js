import React from "react";
import Header from "@/components/header";
import HeaderIcons from "@/components/header-icons";
import SearchToken from "@/components/search-token";
import TokenListing from "@/components/token-listing";
import Activity from "@/components/activity";
import Insights from "@/components/insights";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col gap-5 p-8">
      <Header />
      <HeaderIcons />
      <SearchToken />
      <TokenListing />
      <Activity />
      <Insights />
    </div>
  );
}

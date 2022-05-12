import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GithubProvider } from "./context/context";


const GithubUserApp = () => {
  return <main className="h-screen">
    <GithubProvider>
      <Navbar />
      <Outlet />
    </GithubProvider>
  </main>
};

export default GithubUserApp;

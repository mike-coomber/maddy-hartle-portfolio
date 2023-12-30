import { getAllProjects } from "@/api/api";
import React from "react";
import Header from "./components/header";
import { HomeView } from "./components/home-view";
import Footer from "./components/footer";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <Header />
      <HomeView projects={projects} />
      <Footer />
    </>
  );
}

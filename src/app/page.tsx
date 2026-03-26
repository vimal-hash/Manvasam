"use client";

import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import FunFact from "@/components/FunFact";
import Footer from "@/components/Footer";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header currentPage="/" />
      <main>
        <Hero />
        <About />
        <Process />
        <Products />
        <Sustainability />
        <FunFact />
      </main>
      <Footer />
    </>
  );
}

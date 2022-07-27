import { ReactNode } from "react";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

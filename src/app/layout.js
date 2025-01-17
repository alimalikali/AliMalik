import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reveal from "./components/animations/Reveal";


// const inter = Inter({ subsets: ["latin"] });
// {inter.className}
export const metadata = {
  title: "Ali Malik",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-20 sm:px-14  xsm:px-2 h-screen bg-[#000000] relative -z-10">
        <Header/>
        {children}
        <Navbar />
        <Reveal>
        <Footer />

        </Reveal>
        </body>
    </html>
  );
}

import { Inter } from "next/font/google";
// import "@/globals.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Velocita Infosys career",
  description:
    "As a leading IT consulting firm, we help businesses to reinvent and excel by establishing complete reliance on information technology and offering high quality technology consulting services.",
};

export default function CareerLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
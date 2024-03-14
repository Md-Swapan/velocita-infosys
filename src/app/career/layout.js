import { Inter } from "next/font/google";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Velocita Infosys career",
  description:
    "",
};

export default function CareerLayout({ children }) {
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}

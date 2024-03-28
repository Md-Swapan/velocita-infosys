import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import Footer from "@/components/sections/Footer/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "About us",
  description:
    "Since our inception in 2014, Velocita Infosys Limited has embarked on a journey dedicated to delivering exceptional BPO solutions and IT services. Over the years, we have proudly served clients worldwide, leveraging the expertise of our skilled team and experienced management. Our commitment to excellence, integrity, and customer satisfaction has been the cornerstone of our success as we continue to innovate and exceed expectations in the dynamic landscape of business process outsourcing and technology solutions.",
};

export default function AboutLayout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Velocita Infosys",
  description:
    "As a leading IT consulting firm, we help businesses to reinvent and excel by establishing complete reliance on information technology and offering high quality technology consulting services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

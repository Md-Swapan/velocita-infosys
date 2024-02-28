import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import Header from "@/components/sections/Header/Header";
import Experience from "@/components/sections/Experience/Experience";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Experience/>
    </main>
  );
}

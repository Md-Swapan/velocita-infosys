import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import Experience from "@/components/sections/Experience/Experience";
import Header from "@/components/sections/Header/Header";
import ExploreUs from "@/components/sections/ExploreUs/ExploreUs";
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Experience/>
      <ExploreUs />
    </main>
  );
}

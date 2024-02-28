import Image from "next/image";
import styles from "./page.module.css";
import Experience from "@/components/sections/Experience/Experience";

export default function Home() {
  return (
    <main className={styles.main}>
    <Experience/>
    </main>
  );
}

import styles from "./page.module.css";
import Navbar from "@/components/sections/Navbar/Navbar";
import Experience from "@/components/sections/Experience/Experience";
import Header from "@/components/sections/Header/Header";
import ProjectIdea from "@/components/sections/ProjectIdea/ProjectIdea";
import ExploreUs from "@/components/sections/ExploreUs/ExploreUs";

import Footer from "@/components/sections/Footer/Footer";

import ClientReview from "@/components/sections/ClientReview/ClientReview";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Header />
        <Experience />
        <ExploreUs />
        <ClientReview />
        <ProjectIdea />
      </main>
      <Footer />
    </>
  );
}

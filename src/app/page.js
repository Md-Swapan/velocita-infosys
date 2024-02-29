
import styles from "./page.module.css"
import Navbar from "@/components/sections/Navbar/Navbar"
import Experience from "@/components/sections/Experience/Experience"
import Header from "@/components/sections/Header/Header"
import Services from "@/components/sections/Services/Services"
import ProjectIdea from "@/components/sections/ProjectIdea/ProjectIdea"
export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Experience />
      <Services />
      <ProjectIdea />
    </main>
  )
}

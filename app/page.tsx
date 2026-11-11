import { About } from '@/components/portfolio/about'
import { BackgroundFx } from '@/components/portfolio/background-fx'
import { Contact } from '@/components/portfolio/contact'
import { Expertise } from '@/components/portfolio/expertise'
import { Footer } from '@/components/portfolio/footer'
import { Hero } from '@/components/portfolio/hero'
import { Navbar } from '@/components/portfolio/navbar'
import { Projects } from '@/components/portfolio/projects'
import { Services } from '@/components/portfolio/services'

/**
 * Home page — a single scrolling page composed of section components.
 * All copy lives in data/content.ts; each section is its own file.
 */
export default function Home() {
  return (
    <>
      <BackgroundFx />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

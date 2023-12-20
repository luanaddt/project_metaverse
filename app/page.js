import { Footer, Navbar } from "@/components";
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "@/containers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </div>
  )
}

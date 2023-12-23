import { Footer, Navbar } from "@/components";
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from "@/containers";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-01 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-02 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-02 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  )
}

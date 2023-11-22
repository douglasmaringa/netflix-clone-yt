import Footer from "./components/landing/Footer"
import Header from "./components/landing/Header"
import Hero from "./components/landing/Hero"
import KidsShowcase from "./components/landing/KidsShowcase"
import Showcase from "./components/landing/Showcase"

function page() {
  return (
    <div>
        <div className="bg-hero bg-no-repeat bg-cover">
        <Header />
        <Hero/>
        </div>

        <Showcase/>
        <KidsShowcase/>
        <Footer/>
    </div>
  )
}

export default page
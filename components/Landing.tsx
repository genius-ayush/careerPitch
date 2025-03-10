import Appbar from "./Appbar"
import Ending from "./Ending"
import Features from "./Features"
import Footer from "./Footer"
import Hero from "./Hero"
import How from "./How"
import Testimonials from "./Testimonials"

function Landing() {
  return (
    <div className="">
      <Appbar/>
      <Hero/>
      <Features/>
      <How/> 
      <Testimonials/>
      <Ending/>
      <Footer/>
      </div>
  )
}

export default Landing
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "./App.css";
import IntroSection from "./components/IntroSection";
import OfferSection from "./components/OfferSection";
import Blog from "./components/Blog";

const App = () => {

  const ref = useRef(null);

  const options = {
    smooth: true,
  } 

  return (
       <LocomotiveScrollProvider options={options} containerRef={ref}>
      <main data-scroll-container ref={ref}>
        <div className="main">

        <IntroSection/>
        <OfferSection/>
        <Blog/>
           
        </div>
      </main>
    </LocomotiveScrollProvider>
  )
}

export default App

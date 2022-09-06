import React from 'react';
import LandingPageHeader from "../../components/LandingPageComponents/LandingHeader";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/LandingPageComponents/Projects"


// import { Footer } from '../../components/Footer/Footer'

export default function LandingPage() {
  return (
<>
    <Navbar />
    <div>

        

        
        <LandingPageHeader/>
        <Projects/>
        {/* <Footer/> */}

    </div>
    </>
  )
}
import React from "react";
import Header from '../components/header/header'

export const APP = () =>{
    return(
       <>
    <Header/>
    <Navbar/>
    <About/>
    <Experience/>
        <Services/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
        <Footer/>
    </>
    );
}
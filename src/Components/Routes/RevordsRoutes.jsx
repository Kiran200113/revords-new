import React from "react";
import { Routes, Route } from "react-router-dom";
import RevordsNavigation from "../CommonComponents/RevordsNavigation/RevordsNavigation";
import HeroHomePage from "../HeroHomepage/HeroHomePage";
import AboutRevords from "../AboutRevords/AboutRevords";
import CompanyIntro from "../CompanyIntro/CompanyIntro";
import WhyRevords from "../WhyRevords/WhyRevords";
import RevordsParts from "../RevordsDevidedPart/RevordsPart";
import OverlayImageContainer from "../CommonComponents/RevordsNavigation/OverlayImageContainer";
import Footer from "../Footer/Footer";

const RevordsRoutes = () => {
    return (
        <>
            <RevordsNavigation />
            <HeroHomePage />
            <AboutRevords />
            <CompanyIntro/>
            <WhyRevords/>
            <RevordsParts/>
            <OverlayImageContainer/>
            <Footer/>
        </>
    )
}
export default RevordsRoutes
import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroHomePage from "../Components/HeroHomepage/HeroHomePage";
import AboutRevords from "../Components/AboutRevords/AboutRevords";
import CompanyIntro from "../Components/CompanyIntro/CompanyIntro";
import WhyRevords from "../Components/WhyRevords/WhyRevords";
import RevordsParts from "../Components/RevordsDevidedPart/RevordsPart";
import OverlayImageContainer from "./CommonComponents/RevordsNavigation/OverlayImageContainer";

const HomePageRoutes = () => {
    return (
        <>
            <HeroHomePage />
            <AboutRevords />
            <CompanyIntro />
            <WhyRevords />
            <RevordsParts />
            <OverlayImageContainer />
        </>
    )
}
export default HomePageRoutes
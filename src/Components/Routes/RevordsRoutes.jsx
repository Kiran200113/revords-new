import React from "react";
import { Routes, Route } from "react-router-dom";
import RevordsNavigation from "../CommonComponents/RevordsNavigation/RevordsNavigation";
import HeroHomePage from "../HeroHomepage/HeroHomePage";
import AboutRevords from "../AboutRevords/AboutRevords";
import CompanyIntro from "../CompanyIntro/CompanyIntro";
import WhyRevords from "../WhyRevords/WhyRevords";
import RevordsParts from "../RevordsDevidedPart/RevordsPart";

const RevordsRoutes = () => {
    return (
        <>
            <RevordsNavigation />
            <HeroHomePage />
            <AboutRevords />
            <CompanyIntro/>
            <WhyRevords/>
            <RevordsParts/>
        </>
    )
}
export default RevordsRoutes
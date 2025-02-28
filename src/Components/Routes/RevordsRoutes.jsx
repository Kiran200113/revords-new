import React from "react";
import { Routes, Route } from "react-router-dom";
import RevordsNavigation from "../CommonComponents/RevordsNavigation/RevordsNavigation";
import Footer from "../Footer/Footer";
import HomePageRoutes from "../HomePageRoutes";
import TermCondition from "../TermCondition/TermCondition";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import HotspotGaming from "../CompanyPage/HotspotGaming";
import DynamicCommonRoutePage from "../CommonRoutesPages/DynamicCommonRoutePage";
import { BusinessPageData } from "../CommonRoutesPages/BusinessPageData";
import AppLinks from "../AppLinks/AppLinks";

const RevordsRoutes = () => {
    return (
        <>
            <RevordsNavigation />
            <Routes>
                <Route path="/" element={<HomePageRoutes />} />
                <Route path="/term&condition" element={<TermCondition />} />
                <Route path="/privacy&policy" element={<PrivacyPolicy />} />
                <Route path="/app" element={<AppLinks />} />
                {/* <Route path="/hotspotgaming" element={<HotspotGaming />} /> */}
                {/* Dynamic route for slugs */}
                <Route path=":slug" element={<DynamicCommonRoutePage data={BusinessPageData} />} />
            </Routes>
            <Footer />
        </>
    );
};

export default RevordsRoutes;

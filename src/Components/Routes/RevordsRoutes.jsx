import React from "react";
import { Routes, Route } from "react-router-dom";
import RevordsNavigation from "../CommonComponents/RevordsNavigation/RevordsNavigation";
import Footer from "../Footer/Footer";
import HomePageRoutes from "../HomePageRoutes";
import TermCondition from "../TermCondition/TermCondition";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import HotspotGaming from "../CompanyPage/HotspotGaming";

const RevordsRoutes = () => {
    return (
        <>
            <RevordsNavigation />
            <Routes>
                <Route path="/" element={<HomePageRoutes />} />
                <Route path="/term&condition" element={<TermCondition />} />
                <Route path="/privacy&policy" element={<PrivacyPolicy />} />
                <Route path="/hotspotgaming" element={<HotspotGaming />} />
            </Routes>
            <Footer />
        </>
    )
}
export default RevordsRoutes
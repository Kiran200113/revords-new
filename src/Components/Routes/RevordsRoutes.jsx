import React from "react";
import { Routes, Route } from "react-router-dom";
import RevordsNavigation from "../CommonComponents/RevordsNavigation/RevordsNavigation";
import Footer from "../Footer/Footer";
import HomePageRoutes from "../HomePageRoutes";
import TermCondition from "../TermCondition/TermCondition";

const RevordsRoutes = () => {
    return (
        <>
            <RevordsNavigation />
            <Routes>
                <Route path="/" element={<HomePageRoutes />} />
                <Route path="/term&condition" element={<TermCondition />} />
            </Routes>
            <Footer />
        </>
    )
}
export default RevordsRoutes
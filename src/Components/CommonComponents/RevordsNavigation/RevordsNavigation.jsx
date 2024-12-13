import React, { useState, useEffect } from "react";
import "../../../Styles/Navigation.css"
import Revords from "/Images/Revords.png"
import { Link } from "react-router-dom";
const RevordsNavigation = () => {
    const [scrollHeight, setScrollHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 500;
            const newHeight = Math.min((scrollPosition / maxScroll) * 70, 70);
            setScrollHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <section className="NavigationContainer">
                <div className="AnimatedNavigationBar">
                    <div className="ScrollToFillContainer" style={{ height: `${scrollHeight}px` }}>

                    </div>
                    <div className="NavigationContent">
                        <div className="logoContainer">
                            <Link to="/">  <img src={Revords} alt="" /></Link>
                        </div>
                        <div className="NavigationContactUsBtn">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default RevordsNavigation
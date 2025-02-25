import React from "react";
import { Row, Col } from "antd";
import "../../Styles/HowItWorks.css"
import { MdOutlineDoneAll } from "react-icons/md";

const HowItWorks = () => {
    const HowItWorksData = [
        {
            title: "Seamless Sign-Up for Customers",
            tagline:"Customers can join your rewards program in two quick and easy ways:",
            points: [
                "In Store: Customers simply enter their phone number on the in-store tablet to enroll.",
                "Revords App: Customers can download the Revords app, like your business, and instantly become a prospective member."
            ]
        },
        {
            title: "Dashboard – Your Ultimate Growth Tool",
            points: [
                "Get a real-time overview of customer traffic across all your business locations.",
                "Leverage powerful analytics to track revenue trends, optimize promotional spending, and gain insights into competitor activity—all from one intuitive dashboard."
            ]
        },
        {
            title: "Autopilot – Your Smart Campaign Bot",
            tagline:"Set up automated campaigns that bring customers back—without any manual effort:",
            points: [
                "Welcome new customers, celebrate birthdays, and re-engage inactive customers automatically.",
            ]
        },
        {
            title: "Targeted Promotions – Instant Customer Boost",
            points: [
                "Launch one-time custom promotions tailored for specific customer segments to drive instant engagement.",
                "With a single click, send promotions across multiple business locations or direct customers to a specific store."
            ]
        }
    ];

    return (
        <>
            <section id="HowItWorks">
                <div className="OverlayContainer">

                </div>
                <div style={{ position: "sticky" }}>
                    <h2 className="sectionHeading" style={{ marginTop: "0px" }}>How does it Work?</h2>
                    <p>Revords helps businesses grow by offering customized rewards, delivering targeted promotions, automating campaigns, and engaging customers effortlessly.
                    </p>

                </div>
                <div>
                    <Row>
                        {HowItWorksData.map((item, index) => (
                            <Col lg={12} md={24}>
                                <div className="ProcessContainers">


                                    <div key={index} style={{ marginBottom: "50px" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <MdOutlineDoneAll style={{ marginRight: "20px", backgroundColor: "#b77733", color: "white", borderRadius: "50%", padding: "4px" }} /><h4 style={{ fontSize: "15px" }}>{item.title}</h4>
                                        </div>
                                        <div className="MarginAdjust">
                                        <p>{item.tagline}</p>
                                        <ul style={{ marginTop: "0px" }}>
                                            {item.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    );
};

export default HowItWorks;

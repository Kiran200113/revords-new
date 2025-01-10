import React from "react";
import { Row, Col } from "antd";
import "../../Styles/HowItWorks.css"
import { MdOutlineDoneAll } from "react-icons/md";

const HowItWorks = () => {
    const HowItWorksData = [
        {
            title: "Two quick and easy ways to sign up",
            points: [
                "Customers can sign up for your rewards program by simply entering their phone number on the store tablet.",
                "Alternatively, customers can download Revords app, like your business and become prospect member of your business."
            ]
        },
        {
            title: "Autopilot – Your Campaign Bot",
            points: [
                "Design your own automated campaign that keep customers coming back for more.",
                "Welcome new customers, celebrate birthdays, and win back inactive customers - all without lifting a finger!"
            ]
        },
        {
            title: "Targeted Promotions – The Instant Booster",
            points: [
                "Craft custom one-time promotions to target specific customer groups and boost your customer footprint instantly. ",
                "With one click, send promotions to customers of your multiple business locations and drive them to any location or a specific location within your business group."
            ]
        },
        {
            title: "Dashboard – Your ultimate tool for success",
            points: [
                "Review customer traffic across multiple businesses at a glance.",
                "Using Powerful analytics, monitor your revenue trend, control your promotion spend, gain insights into competition activities around your business, and more"
            ]
        }
    ];

    return (
        <>
            <section id="HowItWorks">
                <div className="OverlayContainer">

                </div>
                <div style={{ position: "sticky" }}>
                    <h2 className="sectionHeading" style={{ marginTop: "0px" }}>How it Works?</h2>
                    <p>The Revords platform powers business growth by customizing rewards, delivering targeted promotions, automating campaigns, and engaging customers effectively.
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
                                        <ul style={{ marginTop: "0px" }}>
                                            {item.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
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

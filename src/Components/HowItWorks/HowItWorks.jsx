import React from "react";
import { Row, Col } from "antd";
import "../../Styles/HowItWorks.css"
import { MdOutlineDoneAll } from "react-icons/md";

const HowItWorks = () => {
    const HowItWorksData = [
        {
            title: "Rewards on Autopilot",
            points: [
                "Design automated rewards programs that keep customers coming back for more.",
                "Welcome new customers, celebrate birthdays, and win back inactive ones - all without lifting a finger!"
            ]
        },
        {
            title: "Sign-Ups in Seconds, Not Minutes",
            points: [
                "Ditch the paper forms. Customers simply use their phone number to join in-store, making data collection a breeze."
            ]
        },
        {
            title: "AutoPilot: Your Marketing Superhero",
            points: [
                "Send personalized offers straight to your customers' phones, via app notifications, texts, or emails.",
                "Revords' AutoPilot is highly effective compared to traditional marketing - watch your sales soar!"
            ]
        },
        {
            title: "Targeted Promotions for Instant Impact",
            points: [
                "Craft custom one-time promotions to target specific customer groups.",
                "Need to boost sales during a special event? Done! Revords can help you significantly increase customer visits."
            ]
        }
    ];

    return (
        <>
            <section id="HowItWorks">
                <div className="OverlayContainer">

                </div>
                <h2 className="sectionHeading" style={{ position: "sticky", marginTop: "0px" }}>How it Works?</h2>
                <div>
                    <Row>
                        {HowItWorksData.map((item, index) => (
                            <Col lg={12} md={24}>
                                <div className="ProcessContainers">


                                    <div key={index} style={{ marginBottom: "50px" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <MdOutlineDoneAll style={{  marginRight: "20px", backgroundColor: "#b77733", color: "white", borderRadius: "50%", padding: "4px" }} /><h4>{item.title}</h4>
                                        </div>
                                        <ul>
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

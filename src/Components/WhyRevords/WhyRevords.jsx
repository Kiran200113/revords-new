import React from "react";
import "../../Styles/WhyRevords.css"
import { Row, Col } from "antd";
import MultipleWays from "/Icons/MultipleWays.png"
import visitingandspendinghabits from "/Icons/visitingandspendinghabits.png"
import Customizablelook from "/Icons/Customizablelook.png"
import Powerfulandaccurate from "/Icons/Powerfulandaccurate.png"
import Managemultiplelocations from "/Icons/Managemultiplelocations.png"
import Simplifiedcustomer from "/Icons/Simplifiedcustomer.png"
import customer from "./customer-engagement.png"
import payment from "./payment.png"
import data from "./data.png"
import destinations from "./destinations.png"
import TargetPromostions from "./TargetPromostions.png"
import branding from "./branding.png"
const WhyRevords = () => {

    const CardsContent = [
        // {
        //     title: "Simplified customer enrollment",
        //     image: Simplifiedcustomer
        // },
        // {
        //     title: "Multiple ways of earning points for customers",
        //     image: MultipleWays
        // },
        // {
        //     title: "Tag your customers by their visiting and spending habits",
        //     image: visitingandspendinghabits
        // },
        // {
        //     title: "Customizable look and feel for different businesses",
        //     image: Customizablelook
        // },
        // {
        //     title: "Manage multiple locations effectively",
        //     image: Managemultiplelocations
        // },
        // {
        //     title: "Powerful and accurate analytics",
        //     image: Powerfulandaccurate
        // },
        {
            title: "Generate 12x greater customer footprint",
            image: customer
        },
        {
            title: "Cost effective – Retain your customers at a fraction of the cost of traditional marketing",
            image: payment
        },
        {
            title: "Powerful Data Analytics",
            image: data
        },
        {
            title: "Manage multiple locations effectively",
            image: destinations
        },
        {
            title: "Send targeted promotions based on customer visits and spending habits",
            image: TargetPromostions
        },
        {
            title: "Business Branding: MMS promotions are sent with your business name and from a dedicated number assigned for your business.",
            image: branding
        }
    ]
    return (
        <>
            <section id="WhyRevordsContainer" className="SectionStyle">
                <div>
                    <h2 className="sectionHeading" style={{display:"flex"}}>Why Revords<span style={{fontSize:"20px",marginRight:"5px"}}>&reg;</span>?</h2>
                    <div>
                        <Row>
                            {CardsContent.map((item, index) => (
                                <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                    <div className="AnimatedCardContainer">
                                        {/* <span>0{index + 1}</span> */}
                                        <div className="CardIconContainer">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className="HeadingContainer">
                                            <h4>{item.title}</h4>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WhyRevords
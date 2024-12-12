import React from "react";
import "../../Styles/WhyRevords.css"
import { Row, Col } from "antd";
import MultipleWays from "/Icons/MultipleWays.png"
import visitingandspendinghabits from "/Icons/visitingandspendinghabits.png"
import Customizablelook from "/Icons/Customizablelook.png"
import Powerfulandaccurate from "/Icons/Powerfulandaccurate.png"
import Managemultiplelocations from "/Icons/Managemultiplelocations.png"
import Simplifiedcustomer from "/Icons/Simplifiedcustomer.png"
const WhyRevords = () => {

    const CardsContent = [
        {
            title: "Simplified customer enrollment",
            image:Simplifiedcustomer
        },
        {
            title: "Multiple ways of earning points for customers",
            image: MultipleWays
        },
        {
            title: "Tag your customers by their visiting and spending habits",
            image: visitingandspendinghabits
        },
        {
            title: "Customizable look and feel for different businesses",
            image: Customizablelook
        },
        {
            title: "Manage multiple locations effectively",
            image: Managemultiplelocations
        },
        {
            title: "Powerful and accurate analytics",
            image: Powerfulandaccurate
        }
    ]
    return (
        <>
            <section id="WhyRevordsContainer">
                <div>
                    <div>

                    </div>
                    <div>
                        <Row>
                            {CardsContent.map((item, index) => (
                                <Col key={index} lg={8} md={12} style={{ width: "100%" }}>
                                    <div className="AnimatedCardContainer">
                                        <span>0{index + 1}</span>
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
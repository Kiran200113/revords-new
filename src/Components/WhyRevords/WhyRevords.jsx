import React from "react";
import "../../Styles/WhyRevords.css"
import { Row, Col } from "antd";
const WhyRevords = () => {

    const CardsContent = [
        {
            title: "Simplified customer enrollment"
        },
        {
            title: "Multiple ways of earning points for customers"
        },
        {
            title: "Tag your customers by their visiting and spending habits"
        },
        {
            title: "Customizable look and feel for different businesses"
        },
        {
            title: "Manage multiple locations effectively"
        },
        {
            title: "Powerful and accurate analytics"
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
                                <Col key={index} lg={8} md={12} style={{width:"100%"}}>
                                    <div className="AnimatedCardContainer">
                                        <span>0{index + 1}</span>
                                        <div>

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
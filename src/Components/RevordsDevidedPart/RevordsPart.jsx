import React from "react";
import "../../Styles/RevordsPart.css"
import { Row, Col } from "antd";
const RevordsParts = () => {

    const CardData = [
        {
            title: "Innovative Solutions",
            content: "We pride ourselves on developing innovative and customizable loyalty software that adapts to the unique requirements of each business, ensuring a seamless and tailored experience."
        },
        {
            title: "Customer-Centric Approach",
            content: "We place our clients and their customers at the heart of everything we do. Our solutions are designed to enhance customer satisfaction and engagement, leading to increased brand loyalty and advocacy."
        },
        {
            title: "Expert Team",
            content: "Our team of industry experts is dedicated to providing unparalleled support and guidance to our clients, ensuring they maximize the potential of our loyalty software and achieve their business objectives."
        },
        {
            title: "Continuous Improvement",
            content: "We are committed to continuous improvement and staying ahead of the curve. We regularly update our software to incorporate the latest industry trends and technological advancements, guaranteeing that our clients always have access to state-of-the-art loyalty solutions."
        }
    ]

    return (
        <>
            <section id="RevordsPartContainer">
                <div className="ScrollingAnimationContainer">
                    <Row>
                        <Col lg={10}>
                            <div className="CompanyDetailsContainer">

                            </div>
                        </Col>
                        <Col lg={14}>
                            <div className="ScrollingAnimationCardsContainer">
                                {CardData.map((item, index) => (
                                    <div key={index}>
                                        <h4>{item.title}</h4>
                                        <p>{item.content}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
        </>
    )
}
export default RevordsParts
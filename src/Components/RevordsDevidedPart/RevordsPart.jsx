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
                                <h2>What Sets Us Apart</h2>
                                <p>At Revords, we redefine the customer experience by merging innovative solutions with a deep understanding of business needs. Our platform isn’t just a tool it’s a partner in your success.</p>
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
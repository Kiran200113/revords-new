import React from "react";
import "../../Styles/RevordsPart.css"
import { Row, Col } from "antd";
const RevordsParts = () => {

    const CardData = [
        {
            title: "Innovative Solutions",
            content: "We develop cutting-edge, customizable loyalty software that adapts to the unique needs of each business, providing a seamless and personalized customer experience."
        },
        {
            title: "Customer-Centric Approach",
            content: "Our solutions are designed to put your clients and their customers at the forefront, enhancing satisfaction and fostering brand loyalty through engagement and personalized experiences."
        },
        {
            title: "Expert Team",
            content: "Our team of industry experts provides unparalleled support and guidance, helping our clients maximize the potential of our loyalty software to achieve their business goals."
        },
        {
            title: "Continuous Improvement",
            content: "We are committed to continuous improvement, regularly updating our software to incorporate the latest industry trends and technological advancements. This ensures our clients always have access to state-of-the-art loyalty solutions."
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
                                <p>At Revords, we go beyond the ordinary to redefine the customer experience. By seamlessly integrating innovative solutions with a deep understanding of business needs, we transform how you connect with your customers. Our platform isn’t just a tool—it’s a strategic partner in your success, tailored to your unique challenges and designed to drive lasting results.
                                </p>
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
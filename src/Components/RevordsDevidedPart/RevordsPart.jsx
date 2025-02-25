import React from "react";
import "../../Styles/RevordsPart.css"
import { Row, Col } from "antd";
const RevordsParts = () => {

    const CardData = [
        {
            title: "Tailored Solutions",
            content: "Customizable loyalty software designed to seamlessly adapt to your business, delivering personalized customer experiences."
        },
        {
            title: "Customer-Centric Approach",
            content: "Solutions crafted to enhance engagement, satisfaction, and brand loyalty through impactful interactions."
        },
        {
            title: "Expert Support",
            content: <>Our dedicated team provides ongoing technical assistance, helping you get the most out of <b>Revords' potential</b> while ensuring smooth, hassle-free operation.</>
        },
        {
            title: "Future-Ready Innovation",
            content: "We stay ahead of industry trends, continuously enhancing our platform to bring you the latest advancements in loyalty solutions."
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
                                <p style={{textAlign:"justify"}}>At Revords, we go beyond just offering a platform—we create strategic partnerships that unlock your business’ true potential. By combining cutting-edge technology with a deep understanding of your business needs, we help you build stronger customer relationships that drive loyalty and growth.</p>
                            <p style={{textAlign:"justify"}}>With Revords, loyalty isn’t just a program—it’s a powerful connection between your business and your customers.
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
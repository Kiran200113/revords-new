import React from "react";
import { Row, Col,Image } from "antd";
import "../../Styles/AboutRevords.css"
const AboutRevords = () => {


    const CardsData = [
        {
            title: "Access to Powerful Dashboard",
            image: "/Images/RevordUserFreindlyDashboard.png"
        },
        {
            title: "Customer Tablet",
            image: "/Images/CustomerAppImage.png"
        },
        {
            title: "Store Tablet",
            image: "/Images/StoreTablet1.png"
        },
        {
            title: "Mobile App For Business Owners And Customers",
            image: "/Images/MobileApp1.png"
        }
    ]
    return (
        <>
            <section id="FeaturesCardContainer" className="SectionStyle">
                <h2 className="sectionHeading">What do you get with REVORDS?</h2>
                <div className="MainFeaturesContainer">

                    <Row>
                        {CardsData.map((item, index) => (
                            <Col lg={6} style={{ width: "100%" }}>
                                <div className="CardContainer">
                                    <div className="TitleContainer">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <hr />
                                    <div className="CardContentContainer">
                                        <Image src={item.image} alt="" />
                                    </div>

                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </section>
        </>
    )
}
export default AboutRevords
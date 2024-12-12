import React from "react";
import { Row, Col } from "antd";
import "../../Styles/AboutRevords.css"
const AboutRevords = () => {


    const CardsData = [
        {
            title: "User Friendly Marketing Dashboard",
            image: "/Images/RevordUserFreindlyDashboard.png"
        },
        {
            title: "Customer Tablet",
            image: "/Images/CustomerTablet.png"
        },
        {
            title: "Store Tablet",
            image: "/Images/StoreTablet.png"
        },
        {
            title: "Mobile App For Business Owners And Customers",
            image: "/Images/MobileApp.png"
        }
    ]
    return (
        <>
            <section id="FeaturesCardContainer">
                <div className="MainFeaturesContainer">
                    <Row>
                        {CardsData.map((item, index) => (
                            <Col lg={6} style={{width:"100%"}}>
                                <div className="CardContainer">
                                    <div className="TitleContainer">
                                        <h4>{item.title}</h4>
                                    </div>
                                    <hr />
                                    <div className="CardContentContainer">
                                        <img src={item.image} alt="" />
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
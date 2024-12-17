import React from "react";
import "../../Styles/Clients.css";
import { Row, Col,Image } from 'antd';
const Clients = () => {
    return (
        <>
            <section id="OurClients" >

                <Row>

                    <Col lg={12} md={12} xs={24} sm={24}>
                        <div>
                            <h2 className="sectionHeading">Our Location</h2>
                            <div className="LocationImage">
                                <Image src="/Images/RevordsLocationMap.png" alt="" />
                            </div>
                        </div>
                    </Col>
                    <Col lg={12} md={12} xs={24} sm={24}>
                        <div className="SecondColumn">
                            <h2 className="sectionHeading">Our Clients</h2>
                            <div className="ClientCardContainer">
                                <img src="/Images/Elite Gaming.png" />
                                <img src="/Images/LuckyDay.png" />
                            </div>
                        </div>
                    </Col>
                </Row>

            </section>
        </>
    )
}
export default Clients;
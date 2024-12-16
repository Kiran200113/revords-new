import React from "react";
import "../../Styles/Clients.css";
import { Row, Col } from 'antd';
const Clients = () => {
    return (
        <>
            <section id="OurClients" className="SectionStyle">
                <h2 className="sectionHeading">Our Clients</h2>
                <Row>
                    <Col lg={1} md={0} xs={0} sm={0} />
                    <Col lg={10} md={12} xs={24} sm={24}>
                        <div className="ClientCardContainer">
                            <img src="/Images/Elite Gaming.png" />
                        </div>
                    </Col>
                    <Col lg={1} md={0} xs={0} sm={0} />
                    <Col lg={10} md={12} xs={24} sm={24}>
                        <div className="ClientCardContainer">
                            <img src="/Images/LuckyDay.png" />
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default Clients;
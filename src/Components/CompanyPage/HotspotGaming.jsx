import React from "react";
import "../../Styles/HotspotGaming.css";
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import "../../Styles/HeroHomePage.css"
const HotspotGaming = () => {
    return (
        <>

            <section id="CompanyPageBannerContainer">
            </section>
            <section id="CompanyPage" className="SectionStyle">
                <div className="CompanyBanner">
                    <Row>
                        <Col lg={4} xs={12}>
                            <div className="companyImage">
                                <img src="/Images/Hot Spot Logo.png" />
                            </div>
                        </Col>
                        <Col lg={1} xs={1} />
                        <Col lg={19} xs={11}>
                            <div className="companyDetails">
                                <h3>Hot&nbsp;spot&nbsp;Gaming</h3>
                                <h4>Cafe & Lounge</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col lg={12}>
                        <div className="leftSideDetailsContainer">
                            <h1>About Hot spot gaming cafe</h1>
                            <p>Hot Spot Gaming Cafe is a warm and friendly gaming venue providing a comfortable and secure environment where guests can relax, enjoy drinks, and experience the latest in interactive entertainment.
                            </p>
                            <p><b>Address:&nbsp;</b>4609 S Harlem Ave, Unit A, Forest View, IL 60402</p>
                            <p><b>Phone:</b><Link to="tel:7737169873">&nbsp;(773)-716-9873</Link></p>
                            <p><b>Hours:</b></p>
                            <ul>
                                <li>Monday:&nbsp;9:00AM to 2:00AM</li>
                                <li>Tuesday:&nbsp;9:00AM to 2:00AM</li>
                                <li>Wednesday:&nbsp;9:00AM to 2:00AM</li>
                                <li>Thursday:&nbsp;9:00AM to 2:00AM</li>
                                <li>Friday:&nbsp;9:00AM to 2:00AM</li>
                                <li>Saturday:&nbsp;9:00AM to 2:00AM</li>
                                <li>Sunday:&nbsp;9:00AM to 2:00AM</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="rightSideImageContainer">
                            <img src="/Images/Hot Spot Cafe - inside.png" />
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}
export default HotspotGaming;
import React from "react";
import "../../Styles/HotspotGaming.css";
import { Row, Col, Image } from 'antd';
import { Link } from "react-router-dom";
const HotspotGaming = () => {
    return (
        <>

            <section id="CompanyPageBannerContainer">
                <div className="CompanyBanner">
                    <div className="bannerImage">
                        <img src="https://images.unsplash.com/photo-1644461150893-19421f5020d8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div style={{ position: "sticky" }}>
                        <div className="companyImage">
                            <img src="/Images/Hot Spot Logo.png" />
                        </div>

                        <div className="companyDetails">
                            <h3>Hot spot Gaming</h3>
                            <p>Cafe & Lounge</p>
                        </div>

                    </div>
                </div>
            </section>
            <section id="CompanyPage" className="SectionStyle">

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
                            <div>
                                <p><b>Legal</b></p>
                                <div>
                                    <p><a href="/Images/Hot Spot Gaming Cafe LLC Terms And Conditions.pdf" target="_blank">Terms & Conditions
                                    </a></p>
                                    <p> <a href="/Images/Hot Spot Gaming Cafe - Privacy Policy.pdf" target="_blank">Privacy Policy
                                    </a></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="rightSideImageContainer">
                            <Image src="/Images/Hot Spot Cafe - inside.png" />
                            <Image src="/Images/Hot Spot Cafe - outside ( Copy ).jpg" alt="" />
                        </div>
                    </Col>
                </Row>

            </section>
        </>
    )
}
export default HotspotGaming;
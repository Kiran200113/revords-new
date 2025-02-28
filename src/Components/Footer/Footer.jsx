import React from "react";
import "../../Styles/Footer.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Revords from "/Images/Revords.png"
const Footer = () => {

    return (
        <>
            <section id="FooterContainer">
                <div className="Footer">
                    <Row>
                        <Col lg={16}>
                            <div>
                                <img src="/Images/RevordsTrademarkLogo.png" alt="" />
                                <p>One stop customer loyalty program that will turn your visitors in to happy and loyal customers by digitalizing your business reward program!
                                </p>
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div id="ColumnsEdit">
                                <div>
                                    <h4>Company</h4>
                                    <ul style={{ padding: "0px" }}>
                                        <li>
                                            <Link to="/" style={{ color: "black" }}><span>Contact Us</span></Link>
                                        </li>
                                        <li>
                                            <span><Link to="/term&condition">Terms & Conditions</Link></span>
                                        </li>
                                        <li>
                                            <span><Link to="/privacy&policy">Privacy Policy</Link></span>
                                        </li>
                                        {/* <div>
                                       &nbsp;&nbsp;&nbsp;
                                    </div>
                                        */}
                                    </ul>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    {/* <hr style={{ backgroundColor: "rgba(136, 158, 168, 0.2)", border: "0.5px solid rgba(136, 158, 168, 0.2)" }} /> */}
                    {/* <div className="CopywriteAndPrivacy">
                        <div>
                            <p> © 2024 <Link to="https://www.outleadsolutions.com/" target="_blank">OutLead Solutions</Link>. All rights reserved.</p>
                        </div>

                    </div> */}
                </div>
            </section>
        </>
    )
}
export default Footer
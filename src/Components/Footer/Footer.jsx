import React from "react";
import "../../Styles/Footer.css"
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <>
            <section id="FooterContainer">
                <div className="Footer">
                    <Row>
                        <Col lg={8}>
                            <div>
                                <h4>Revords</h4>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eos unde ut in! Dolor culpa neque deleniti doloremque sunt voluptatibus!</p>
                            </div>
                        </Col>
                        <Col lg={16}>
                            <div id="ColumnsEdit">
                                <div>
                                    <h4>Company</h4>
                                    <div>
                                        <span>Contact Us</span>
                                    </div>
                                </div>
                                <div>
                                    <h4>Social Media</h4>
                                    <span>Demo</span>
                                    <span>Demo</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <hr style={{ backgroundColor: "rgba(136, 158, 168, 0.2)", border: "0.5px solid rgba(136, 158, 168, 0.2)" }} />
                    <div className="CopywriteAndPrivacy">
                        <div>
                            <p> © 2024 <Link to="https://www.outleadsolutions.com/" target="_blank">OutLead Solutions</Link>. All rights reserved.</p>
                        </div>
                        <div>
                            <span>Terms & Conditions</span>&nbsp;&nbsp;&nbsp;<span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Footer
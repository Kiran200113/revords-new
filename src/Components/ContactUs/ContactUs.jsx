import React, { useRef } from "react";
import "../../Styles/ContactUs.css";
import { Row, Col, Input, Button, Form, notification } from "antd";
import TextArea from "antd/es/input/TextArea";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const ContactUs = () => {
    const formRef = useRef(null);

    const handleSubmit = async (values) => {
        try {
            const response = await fetch("https://testapi.prepseed.com/autosend/sendEmailForRevords", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (response.ok) {
                notification.success({ message: "Message sent successfully!" });
                formRef.current.resetFields();
            } else {
                notification.error({ message: "Failed to send message" });
            }
        } catch (error) {
            notification.error({ message: "An error occurred. Try again later." });
        }
    };

    return (
        <section id="ContactContainer">
            <Row>
                <Col lg={12} md={12} style={{ width: "100%" }}>
                    <div className="ContactFormContainer" id="footer">
                        <h4>Your Details</h4>
                        <Form ref={formRef} onFinish={handleSubmit} className="FormContainerContact">
                            <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                                <Input placeholder="Your Name*" />
                            </Form.Item>
                            <Form.Item name="email" rules={[
                                    { required: true, message: "Please enter your email" },
                                    { type: "email", message: "Please enter a valid email" }
                                ]}>
                                <Input placeholder="Your Email*" />
                            </Form.Item>
                            <Form.Item name="number"  rules={[
                                    { pattern: /^[0-9]{10,}$/, message: "Enter a valid phone number (min 10 digits)" }
                                ]}>
                                <Input placeholder="Phone Number" />
                            </Form.Item>
                            <Form.Item name="company"  rules={[{ max: 50, message: "Company name should be under 50 characters" }]}>
                                <Input placeholder="Company" />
                            </Form.Item>
                            <Form.Item name="title"  rules={[{ max: 100, message: "Title should be under 100 characters" }]}>
                                <Input placeholder="Title" />
                            </Form.Item>
                            <Form.Item name="message"  rules={[
                                    { required: true, message: "Please enter your message" },
                                    { min: 10, message: "Message should be at least 10 characters long" }
                                ]}>
                                <TextArea placeholder="Message" />
                            </Form.Item>
                            <div className="BtnContainer">
                                <Button type="primary" htmlType="submit">Send Message</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col lg={12} md={12} style={{ width: "100%" }}>
                    <div className="ContactInfoContainer">
                        <MdOutlineMarkEmailRead style={{ fontSize: "30px" }} />
                        <h3><a href="mailto:info@revords.com" style={{ color: "black" }}>info@revords.com</a></h3>
                    </div>
                </Col>
            </Row>
        </section>
    );
};

export default ContactUs;
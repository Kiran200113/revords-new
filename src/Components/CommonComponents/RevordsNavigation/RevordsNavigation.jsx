import React, { useState, useEffect } from "react";
import "../../../Styles/Navigation.css"
import Revords from "/Images/Revords.png"
import { Link } from "react-router-dom";
import { Modal, notification } from "antd";

const RevordsNavigation = () => {
    const [scrollHeight, setScrollHeight] = useState(70);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        zip: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Please enter your name.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Please enter your email.";
        } else {
            // Simple email pattern
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email address.";
            }
        }
        // Optional: Validate phone number if needed
        // if (formData.phone && !/^\d+$/.test(formData.phone)) {
        //     newErrors.phone = "Please enter a valid phone number.";
        // }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Data:", formData);
            // Submit your form data (fetch/axios) here
            // After submission:
            notification.success({
                message: "Success!",
                description: "Your message has been sent successfully.",
                placement: "topRight",
            });
            setIsModalOpen(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                zip: "",
                message: ""
            })
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = 500;
            const newHeight = Math.min((scrollPosition / maxScroll) * 70, 70);
            setScrollHeight(newHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    const scrollToFooter = () => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <>
            <section className="NavigationContainer">
                <div className="AnimatedNavigationBar">
                    <div className="ScrollToFillContainer" style={{ height: '70px' }}>

                    </div>
                    <div className="NavigationContent">
                        <div className="logoContainer">
                            <Link to="/">  <img src="/Images/RevordsTrademarkLogo.png" alt="" /></Link>
                        </div>
                        <div className="NavigationContactUsBtn">
                            <div>
                                <div className="CommonBtnContainer">
                                    <button className="TransparentBtn" onClick={scrollToFooter}
                                    //   onClick={showModal} 
                                      >Connect Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                title="Request A Demo"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null} // We will handle the footer via form buttons
            >
                <form onSubmit={handleFormSubmit} className="demo-form-container">
                    <div className="form-field">
                        <label htmlFor="name">Your Name*</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className={errors.name ? "input-error" : ""}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <label htmlFor="phone">Mobile Number*</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                maxLength={10}
                                value={formData.phone}
                                onChange={handleInputChange}
                                placeholder="e.g.: 9876543210"
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')}  // Allow numbers only
                            />
                            {errors.phone && <span className="error-text">{errors.phone}</span>}
                        </div>
                        <div className="form-field">
                            <label htmlFor="email">Email*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="e.g.: demo@gmail.com"
                                className={errors.email ? "input-error" : ""}
                            />
                            {errors.email && <span className="error-text">{errors.email}</span>}
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-field">
                            <label htmlFor="company">Business</label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleInputChange}
                                placeholder="e.g.: My Business LLP"
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="zip">Zip Code</label>
                            <input
                                type="text"
                                id="zip"
                                name="zip"
                                value={formData.zip}
                                onChange={handleInputChange}
                                placeholder="Zip Code"
                            />
                        </div>
                        <div className="form-field">
                            <label htmlFor="message">Your Message</label>
                            <input
                                type="text"
                                id="message"
                                name="message"
                                value={formData.textarea}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Request A Demo</button>
                    </div>
                </form>
            </Modal>
        </>
    )
}
export default RevordsNavigation
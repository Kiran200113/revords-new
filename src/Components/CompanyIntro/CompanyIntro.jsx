import React, { useEffect, useRef, useState } from "react";
import { Row, Col } from "antd";
import "../../Styles/CompanyIntro.css";

const CompanyIntro = () => {
  const imageRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      const rect = imageRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the element is in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate scale based on the scroll position
        const percentageInView = 1 - Math.max(0, rect.top) / windowHeight;
        const newScale = 1 + percentageInView * 0.3; // Adjust scaling factor as needed
        setScale(newScale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="CompanyInfoContainer">
      <div className="SectionStyle">
        <Row>
          <Col lg={12}>
            <div className="CompanyInfoContent">
              <div>
                <h2>ABOUT REVORDS</h2>
                <p>
                  Revords is created and developed by local business owners who
                  carry deep understandings of the dynamic needs of local
                  businesses and the associated customer satisfaction and loyalty.
                  <br />
                  <br />
                  Revords is a straightforward, yet robust customer loyalty
                  platform that makes life simpler for business owners and
                  customers.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={12}>
            <div
              className="CompanyRelatedImage"
              
            >
              <img
              ref={imageRef}
              style={{
                transform: `scale(${scale})`,
                transition: "transform 0.1s ease-out",
              }}
                src="https://images.unsplash.com/photo-1444653389962-8149286c578a?q=80&w=2928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Company"
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default CompanyIntro;

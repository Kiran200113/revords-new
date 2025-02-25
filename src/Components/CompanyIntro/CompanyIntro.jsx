import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Tabs } from "antd";
import "../../Styles/CompanyIntro.css";
import SectionImage from "./sectionBacknew.jpg"
const { TabPane } = Tabs;
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
                <div>
                  <h2 className="sectionHeading" style={{display:"flex"}}>About Revords <span style={{fontSize:"20px",marginRight:"5px"}}>&reg;</span></h2>
                  <p style={{textAlign:"justify"}}>
                  Revords is a customer loyalty platform designed to forge meaningful connections between local merchants and their customers. Founded by experienced technology and retail leaders with master's degrees in computer science and over 30 years of combined industry expertise, Revords blends deep market understanding with cutting-edge innovation to deliver a seamless and rewarding experience. This robust and scalable platform empowers businesses to cultivate customer loyalty while providing valuable rewards to consumers.

                  </p>
                </div>
                <div className="VMContainer">
                  <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Our Mission" key="1">
                     <p style={{textAlign:"justify"}}>To redefine customer engagement by providing businesses with an intuitive and powerful loyalty platform. We empower merchants to craft personalized, rewarding experiences that boost retention, satisfaction, and advocacy, creating lasting connections with their customers.
                     </p>
                    </TabPane>
                    <TabPane tab="Our Vision" key="2">
                      <p style={{textAlign:"justify"}}>We envision a future where businesses and customers seamlessly connect through professional, personalized, and rewarding engagements. By fostering deeper relationships, businesses grow, customers feel valued, and communities thrive. With innovation and collaboration at our core, we are redefining loyalty—building enduring connections that drive businesses' long-term success.
                      </p>
                    </TabPane>
                  </Tabs>
                </div>
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
                src="/Images/AboutRevordsImages.avif"
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

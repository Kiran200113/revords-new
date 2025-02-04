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
                  <h2 className="sectionHeading">ABOUT REVORDS</h2>
                  <p>
                    Revords is a cutting-edge customer loyalty platform designed to connect local merchants with their customers in a more meaningful way.

                    <br />
                    <br />
                    For merchants, Revords offers a powerful toolkit to drive customer engagement and retention. Beyond offering loyalty points, merchants can send targeted promotions and personalized offers directly to their customers. This helps attract repeat business, increase foot traffic, and build a loyal customer base. Merchants can leverage Revords Advance Analytics to track revenue trends, optimize promotional spending, uncover insights about competitive activities of nearby businesses, and much more.
                    <br /><br />
                    With Revords, customers can find local businesses of their choice, effortlessly sign in at participating merchants to earn loyalty points for their purchases. These points can be redeemed for exciting rewards and offers provided by the merchants themselves, creating a seamless and rewarding shopping experience.
                    <br /><br />
                    Whether you're a customer looking for more value from your favorite local shops or a merchant seeking to grow your business, Revords is here to make loyalty rewarding for everyone. Join the Revords community and transform the way you experience local shopping and engagement!

                  </p>
                </div>
                <div className="VMContainer">
                  <Tabs defaultActiveKey="1" centered>
                    <TabPane tab="Our Mission" key="1">
                      <p>
                        At Revords, our mission is to empower local businesses and delight customers by creating lasting connections built on loyalty and rewards.

                      </p>
                      <p>
                        We aim to revolutionize the way merchants engage with their communities by providing an intuitive platform that drives customer retention and business growth. Through innovative solutions, we strive to create a win-win ecosystem where customers feel valued and businesses thrive. By bridging the gap between merchants and customers, we are building a future where loyalty is rewarded and local economies flourish.

                      </p>
                    </TabPane>
                    <TabPane tab="Our Vision" key="2">
                      <p>
                        Our vision is to become the leading platform that transforms local commerce by creating seamless, rewarding experiences for both merchants and customers. We envision a world where every local business has the tools to compete and thrive, and every customer feels valued and connected to their community. Through innovation, collaboration, and a commitment to excellence, we aim to redefine loyalty and elevate local economies, fostering a future where every interaction is meaningful and mutually rewarding.
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
                src={SectionImage}
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

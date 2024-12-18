import React from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Image } from "antd";
const DynamicCommonRoutePage = ({ data }) => {
    const { slug } = useParams();

    // Find the corresponding object based on the slug
    const content = data.find((item) => item.slug === slug);

    if (!content) {
        return <p>Page not found!</p>;
    }

    return (
        <>
            <section id="CompanyPageBannerContainer">
                <div className="CompanyBanner">
                    <div className="bannerImage">
                        <img src={content.bannerImage} alt="" />
                    </div>
                    <div style={{ position: "sticky" }}>
                        <div className="companyImage">
                            <img src={content.businessLogo} />
                        </div>

                        <div className="companyDetails">
                            <h3>{content.bannertitle}</h3>
                            <p>{content.bannerTagline}</p>
                        </div>

                    </div>
                </div>
            </section>
            <section id="CompanyPage" className="SectionStyle">
                <Row>
                    <Col lg={12}>
                        <div className="leftSideDetailsContainer">
                            <h1>{content.mainheading}</h1>
                            {content.descriptionData}

                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="rightSideImageContainer">
                        {content.businessImages.map((image, index) => (
                                <Image key={index} src={image} alt={`Business Image ${index + 1}`} />
                            ))}
                        </div>
                    </Col>
                </Row>
            </section>



        </>
    );
};

export default DynamicCommonRoutePage;

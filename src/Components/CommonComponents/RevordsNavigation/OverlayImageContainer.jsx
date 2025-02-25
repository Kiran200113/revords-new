import React, { useEffect, useRef } from "react";
import "../../../Styles/OverlayImage.css";

const OverlayImageContainer = () => {
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (imageRef.current) {
                    // Calculate the scale value based on the intersection ratio
                    const scaleValue = 1 + entry.intersectionRatio * 0.2; // Adjust multiplier for desired scaling effect
                    imageRef.current.style.transform = `scale(${scaleValue})`;
                }
            },
            { threshold: Array.from({ length: 101 }, (_, i) => i / 100) } // Generate thresholds from 0 to 1
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    return (
        <>
            <section id="BackImageOverlayContainer">
                <div className="OverlayImageContainer">
                    <div className="CommitmentContainer">
                        <div className="ContentContainerCommitment">
                            <h3>Our Commitment</h3>
                            <p style={{textAlign:"justify"}}>
                            At Revords, we are committed to delivering exceptional loyalty solutions that drive business success and enhance customer experiences. Our focus is on providing innovative, customizable software that adapts to the unique needs of each client, ensuring they have the tools necessary to thrive. With a strong emphasis on continuous improvement and a client-centered approach, we empower businesses to build lasting relationships and achieve their objectives.


                            </p>
                        </div>
                    </div>
                    <div className="overlayContainer"></div>
                    <img
                        ref={imageRef}
                        src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                    />
                </div>
            </section>
        </>
    );
};

export default OverlayImageContainer;

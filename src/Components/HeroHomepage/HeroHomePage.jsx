import React, { useRef } from "react";
import "../../Styles/HeroHomepage.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WelcomeRevords from "/Images/HomeBack.png"
import JoinUstoday from "/Images/JoinUstoday.png"
import DiscoverBusiness from "/Images/DiscoverBusiness.png"
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroHomePage = () => {
    const carousalData = [
        {
            img: WelcomeRevords,
            text: "Welcome to Revords",
        },
        {
            img: DiscoverBusiness,
            text: "Discover Amazing Services",
        },
        {
            img: "https://images.unsplash.com/photo-1500731250117-4b0cbb8b276a?q=80&w=2868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Create Your Own Success Story",
        },
        {
            img: JoinUstoday,
            text: "Join Us Today!",
        },
    ];

    const swiperRef = useRef(null);

    const handleSlideChange = () => {
        const slides = document.querySelectorAll(".CarousalText");
        slides.forEach((slide) => {
            slide.classList.remove("animate");
            void slide.offsetWidth; // Trigger reflow to restart animation
        });
        const activeSlide = document.querySelector(".swiper-slide-active .CarousalText");
        if (activeSlide) {
            activeSlide.classList.add("animate");
        }
    };

    return (
        <section id="HeroHomePageContainer">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                // pagination={{
                //     clickable: true,
                // }}
                speed={800}
                navigation={true}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {carousalData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="CarousalImageContainer">
                            <div className="HeroHomePageOverlayContainer"></div>
                            <img src={item.img} alt="" class="zoom-effect" />
                            <div className="CarousalContentContainer">
                                <div>
                                    <div className="CarousalText"><h3>{item.text}</h3></div>
                                    <div className="CommonBtnContainer">
                                        <button className="TransparentBtn">About Revords</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroHomePage;

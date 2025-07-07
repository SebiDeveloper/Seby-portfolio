import React, { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Helmet } from "react-helmet-async";


import aboutData from "../../utils/aboutData/aboutData";

import "swiper/css";
import "swiper/css/pagination";
import "./About.scss";

interface AboutItem {
  icon: ReactNode;
  title: string;
}

const About: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: string) =>
      `<span class="${className}">${index + 1}</span>`,
  };

  return (
    <div className="about">

    <Helmet>
      <title>About</title>
      <meta name="description" content="I'm Seby, a front-end developer passionate about creating modern websites and web apps." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Sebastian" />
      <meta name="keywords" content="portfolio, front-end developer, react, javascript, websites, seby" />
    </Helmet>

      <p className="about__description">
        I am a beginner Frontend Developer with a passion for creating beautiful and functional web interfaces. I enjoy learning new technologies and constantly improving my skills in JavaScript, React, and modern web design. My goal is to build responsive, user-friendly websites that provide a great experience for everyone. Although I am at the beginning of my journey, I am eager to take on challenges and grow as a developer.
      </p>
      <h2 className="about__subtitle">What I Do</h2>

      {isMobile ? (
        <div className="about__slider-wrapper">
            <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="about__swiper"
            >
            {aboutData.map((item: AboutItem, index: number) => (
                <SwiperSlide key={index}>
                <div className="about__card">
                    <div className="about__icon">{item.icon}</div>
                    <div className="about__title">{item.title}</div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
      </div>
      ) : (
        <div className="about__block">
          {aboutData.map((item: AboutItem, index: number) => (
            <div className="about__card" key={index}>
              <div className="about__icon">{item.icon}</div>
              <div className="about__title">{item.title}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;
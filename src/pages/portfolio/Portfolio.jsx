import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Helmet } from "react-helmet-async";

import portfolioData from "../../utils/portfolioData/portfolioData";

import "swiper/css";
import "swiper/css/pagination";
import "./Portfolio.scss";

const Portfolio = () => {
  const categories = ["All", "Websites", "Web applications"];

  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "All";
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter(
          (item) => item.category.trim() === selectedCategory.trim()
        );

  useEffect(() => {
    const handleScroll = () => {
      const navbarList = document.querySelector(".portfolio__navbar-list");
      const scrollWidth = navbarList.scrollWidth - navbarList.clientWidth;
      const scrollPosition = navbarList.scrollLeft;
      const progress = (scrollPosition / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    const navbarList = document.querySelector(".portfolio__navbar-list");
    if (navbarList) {
      navbarList.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (navbarList) {
        navbarList.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="portfolio">

    <Helmet>
      <title>Portfolio | Projects Seby</title>
      <meta name="description" content="My portfolio projects" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Sebastian" />
      <meta name="keywords" content="portfolio, front-end developer, react, javascript, websites, seby" />
    </Helmet>

      <div className="portfolio__navbar">
        <ul className="portfolio__navbar-list">
          {categories.map((category) => (
            <li
              key={category}
              className={`portfolio__navbar-item ${
                selectedCategory === category
                  ? "portfolio__navbar-item-active"
                  : ""
              }`}
              onClick={() => {
                setSelectedCategory(category);
                localStorage.setItem("selectedCategory", category);
              }}
            >
              {category}
            </li>
          ))}
        </ul>

        <div
          className="portfolio__navbar-scroll-line"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Desktop view */}
      <div className="portfolio__block desktop">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) => (
            <Link
              to={`/project/${item.slug}`}
              key={item.id}
              className="portfolio__item"
            >
              <div
                className="portfolio__image-container"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="portfolio__content">
                <h3 className="portfolio__title">{item.title}</h3>
                <p className="portfolio__category">{item.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="portfolio__no-projects">
            There are no projects in this category.
          </p>
        )}
      </div>

      {/* Mobile/Tablet view */}
      <div className="portfolio__block-mobile mobile">
        {filteredProjects.length > 0 ? (
          <Swiper
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className}">${index + 1}</span>`;
              },
            }}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 20 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
            }}
            modules={[Pagination]}
            className="portfolioSwiper"
          >
            {filteredProjects.map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/project/${item.slug}`}
                  className="portfolio__item"
                >
                  <div
                    className="portfolio__image-container"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  <div className="portfolio__content">
                    <h3 className="portfolio__title">{item.title}</h3>
                    <p className="portfolio__category">{item.category}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p className="portfolio__no-projects">
            There are no projects in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
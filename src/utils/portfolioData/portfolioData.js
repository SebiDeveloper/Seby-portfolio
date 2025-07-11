// photos

import business from "../../assets/images/portfolio/business.jpg";
import pulse from "../../assets/images/portfolio/pulse.jpg";
import woman from "../../assets/images/portfolio/Woman.jpg";
import window from "../../assets/images/portfolio/window.jpg";
import marvel from "../../assets/images/portfolio/marvel.jpg";
import productCatalog from "../../assets/images/portfolio/productCatalog.png";
import crypto from "../../assets/images/portfolio/Crypto.png";

// icons

import html from "../../assets/images/sidebar/icons/HTML.svg";
import css from "../../assets/images/sidebar/icons/CSS.svg";
import scss from "../../assets/images/sidebar/icons/SCSS.svg";
import js from "../../assets/images/sidebar/icons/JS.svg"; 
import react from "../../assets/images/sidebar/icons/React.svg";
import ts from "../../assets/images/sidebar/icons/typescript.svg";
import antDesign from "../../assets/images/sidebar/icons/antDesign.svg";

const portfolioData = [
    {
      id: 1,
      title: "Woman",
      slug: "woman-landing-page",  //
      category: "Websites",
      image: woman,
      technologies: [html, scss, js, antDesign],
      link: "https://picture-lime.vercel.app/",
    },
    {
      id: 2,
      title: "Business IT",
      slug: "bussines-it-landing-page",
      category: "Websites",
      image: business,
      technologies: [html, scss, js],
      link: "https://business-it.vercel.app/",
    },
    {
      id: 3,
      title: "Window",
      slug: "window-landing-page",
      category: "Websites",
      image: window,
      technologies: [html, scss, js],
      link: "https://window-eta-one.vercel.app/",
    },
    {
      id: 4,
      title: "Pulse",
      slug: "pulse-landing-page",
      category: "Websites",
      image: pulse,
      technologies: [html, scss, js],
      link: "https://pulse-delta.vercel.app/",
    },
    {
      id: 5,
      title: "Avengers",
      slug: "avengers-multiple-page-application",
      category: "Web applications",
      image: marvel,
      technologies: [html, scss, js, react],
      link: "https://sebi-developer-github-io.vercel.app/",
    },
    {
      id: 6,
      title: "Product Catalog",
      slug: "product-catalog-multiple-page-application",
      category: "Web applications",
      image: productCatalog,
      technologies: [html, scss, js, react, ts],
      link: "https://product-catalog-gilt.vercel.app/",
    },
    {
      id: 7,
      title: "Crypto",
      slug: "crypto-single-page-application",
      category: "Web applications",
      image: crypto,
      technologies: [html, antDesign, js, react],
      link: "https://crypto-app-fiow.vercel.app/",
    }
  ];
  
  export default portfolioData;
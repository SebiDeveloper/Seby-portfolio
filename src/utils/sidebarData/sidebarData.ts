import I from "../../assets/images/sidebar/I.jpg";

import HTML from "../../assets/images/sidebar/icons/HTML.svg";
import CSS from "../../assets/images/sidebar/icons/CSS.svg";
import JS from "../../assets/images/sidebar/icons/JS.svg";
import SCSS from "../../assets/images/sidebar/icons/SCSS.svg";
import antDesign from "../../assets/images/sidebar/icons/antDesign.svg";

import React from "../../assets/images/sidebar/icons/React.svg";
import TypeScript from "../../assets/images/sidebar/icons/typescript.svg";
import Figma from "../../assets/images/sidebar/icons/Figma.svg";
import GIT from "../../assets/images/sidebar/icons/GIT.svg";
import GitHub from "../../assets/images/sidebar/icons/GitHub.svg";

import Instagram from "../../assets/images/sidebar/icons/Instagram.svg";
import Facebook from "../../assets/images/sidebar/icons/Facebook.svg";
import Telegram from "../../assets/images/sidebar/icons/Telegram.svg";

interface ToolItem {
  src: string;
  alt: string;
}

interface socialLink {
  href: string;
  alt: string;
  icon: string;
  name: string;
}

interface PersonalInfo {
  label: string;
  value: string;
}

interface Profile {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  }
}


export const tools: ToolItem[][] = [
  [
    { src: HTML, alt: "HTML" },
    { src: CSS, alt: "CSS" },
    { src: JS, alt: "JS" },
    { src: SCSS, alt: "SCSS" },
    { src: antDesign, alt: "antDesign" },
  ],
  [
    { src: React, alt: "React" },
    { src: TypeScript, alt: "TypeScript" },
    { src: Figma, alt: "Figma" },
    { src: GIT, alt: "GIT" },
    { src: GitHub, alt: "GitHub" },
  ],
];

export const socialLinks: socialLink[] = [
  {
    href: "https://www.instagram.com/seby__sw/",
    alt: "Instagram",
    icon: Instagram,
    name: "Instagram",
  },
  {
    href: "https://t.me/Sebi_developer",
    alt: "Telegram",
    icon: Telegram,
    name: "Telegram",
  },
  {
    href: "https://www.facebook.com/sebastian.gutium",
    alt: "Facebook",
    icon: Facebook,
    name: "Facebook",
  },
  {
    href: "https://github.com/SebiDeveloper",
    alt: "Github",
    icon: GitHub,
    name: "Github",
  },
];

export const personalInfo: PersonalInfo[] = [
    {label: "Gender", value: "Male"},
    {label: "Nationality", value: "Moldovan"},
    {label: "Date of birth", value: "08.06.2003"},
];

export const profile: Profile = {
  name: "Sebastian",
  role: "Frontend Developer",
  image: {
    src: I,
    alt: "I"
  }
}
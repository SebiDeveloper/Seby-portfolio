import { useLocation } from "react-router-dom";

import I from "../../assets/images/sidebar/I.jpg";
import Figma from "../../assets/images/sidebar/icons/Figma.svg";
import HTML from "../../assets/images/sidebar/icons/HTML.svg";
import CSS from "../../assets/images/sidebar/icons/CSS.svg";
import SCSS from "../../assets/images/sidebar/icons/SCSS.svg";
import JS from "../../assets/images/sidebar/icons/JS.svg"
import React from "../../assets/images/sidebar/icons/React.svg";
import GIT from "../../assets/images/sidebar/icons/GIT.svg";
import GitHub from "../../assets/images/sidebar/icons/GitHub.svg"
import Instagram from "../../assets/images/sidebar/icons/Instagram.svg";
import Facebook from "../../assets/images/sidebar/icons/Facebook.svg";
import Telegram from "../../assets/images/sidebar/icons/Telegram.svg";

import "./Sidebar.scss";


const Sidebar = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";

    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <img
                    src={I}
                    alt="I"
                    className="sidebar__profile-image"
                />
                <h2 className="sidebar__profile-name">Sebastian</h2>
                <p className="sidebar__profile-role">Frontend Developer</p>
            </div>
            <div className="sidebar__line"></div>

            <div className={`sidebar__block ${isAboutPage ? "sidebar__visible" : "sidebar__hidden"}`}>
                <div className="sidebar__info">
                    <span className="sidebar__info-label">Gender: </span>
                    <span className="sidebar__info-value">Male</span>
                </div>

                <div className="sidebar__info">
                    <span className="sidebar__info-label">Nationality: </span>
                    <span className="sidebar__info-value">Moldovan</span>
                </div>

                <div className="sidebar__info">
                    <span className="sidebar__info-label">Date of birth: </span>
                    <span className="sidebar__info-value">08.06.2003</span>
                </div>
            </div>

            <div className={`sidebar__block ${isAboutPage ? "sidebar__hidden" : "sidebar__visible"}`}>
                <h3 className="sidebar__title">Tools i work with</h3>
                <div className="sidebar__img">
                    <img src={HTML} alt="HTML" className="sidebar__icons"/>
                    <img src={CSS} alt="CSS" className="sidebar__icons"/>
                    <img src={JS} alt="JS" className="sidebar__icons"/>
                    <img src={SCSS} alt="SCSS" className="sidebar__icons"/>
                </div>

                <div className="sidebar__img">
                    <img src={React} alt="React" className="sidebar__icons"/>
                    <img src={Figma} alt="Figma" className="sidebar__icons"/>
                    <img src={GIT} alt="GIT" className="sidebar__icons"/>
                    <img src={GitHub} alt="GitHub" className="sidebar__icons"/>
                </div>

                <div className="sidebar__contact">
                    <h3 className="sidebar__contact-title">Social Media</h3>
                    <div className="sidebar__contact-block">
                        <a href="https://www.instagram.com/seby__sw/" className="sidebar__contact-link" data-name="Instagram" target="_blank">
                            <img src={Instagram} alt="Instagram" className="sidebar__contact-icons"/>
                        </a>
                        <a href="https://t.me/Sebi_developer" className="sidebar__contact-link" data-name="Telegram" target="_blank">
                            <img src={Telegram} alt="Telegram" className="sidebar__contact-icons"/>
                        </a>
                        <a href="https://www.facebook.com/sebastian.gutium" className="sidebar__contact-link" data-name="Facebook" target="_blank">
                            <img src={Facebook} alt="Facebook" className="sidebar__contact-icons"/>
                        </a>
                        <a href="https://github.com/SebiDeveloper" className="sidebar__contact-link" data-name="Github" target="_blank">
                            <img src={GitHub} alt="Github" className="sidebar__contact-icons"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
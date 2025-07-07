import React from "react";
import { useLocation } from "react-router-dom";

import { tools, socialLinks, personalInfo, profile } from "../../utils/sidebarData/sidebarData";

import "./Sidebar.scss";

interface ImageData {
    src: string;
    alt: string;
}

interface Profile {
    image: ImageData;
    name: string;
    role: string;
}

interface PersonalInfo {
    label: string;
    value: string;
}

interface Tool {
    src: string;
    alt: string;
}

interface SocialLink {
    href: string;
    name: string;
    icon: string;
    alt: string;
}

const Sidebar: React.FC = () => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";

    return (
        <div className="sidebar">
            <div className="sidebar__profile">
                <img
                    src={profile.image.src}
                    alt={profile.image.alt}
                    className="sidebar__profile-image"
                />
                <h2 className="sidebar__profile-name">{profile.name}</h2>
                <p className="sidebar__profile-role">{profile.role}</p>
            </div>
            <div className="sidebar__line"></div>

            <div className={`sidebar__block ${isAboutPage ? "sidebar__visible" : "sidebar__hidden"}`}>
                <div className="sidebar__visible-about">
                    {personalInfo.map((item: PersonalInfo, index: number) => (
                        <div className="sidebar__info" key={index}>
                            <span className="sidebar__info-label">{item.label}: </span>
                            <span className="sidebar__info-value">{item.value}</span>
                        </div>
                    ))}
                </div>

            </div>

            <div className={`sidebar__block ${isAboutPage ? "sidebar__hidden" : "sidebar__visible"}`}>
                <h3 className="sidebar__title">Tools i work with</h3>
                
                {tools.map((row: Tool[], index: number) => (
                    <div className="sidebar__img" key={index}>
                        {row.map((tool, i) => (
                        <img key={i} src={tool.src} alt={tool.alt} className="sidebar__icons" />
                        ))}
                    </div>
                ))}

                <div className="sidebar__contact">
                    <h3 className="sidebar__contact-title">Social Media</h3>
                    <div className="sidebar__contact-block">
                        {socialLinks.map((link: SocialLink, index: number) => (
                            <a
                                key={index}
                                href={link.href}
                                className="sidebar__contact-link"
                                data-name={link.name}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={link.icon} alt={link.alt} className="sidebar__contact-icons" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;
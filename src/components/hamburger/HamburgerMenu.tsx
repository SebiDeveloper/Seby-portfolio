import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

import "./HamburgerMenu.scss";

export type NavItem = {
    name: string;
    path: string;
}

const HamburgerMenu: React.FC = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const location = useLocation();

    const navItems: NavItem[] = [
        { name: "ABOUT 🧑‍💻", path: "/about" },
        { name: "RESUME 📱", path: "/resume" },
        { name: "PORTFOLIO  💼", path: "/portfolio" },
        { name: "CONTACT 📩", path: "/contact" }
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("hamburger__no-scroll");
        } else {
            document.body.classList.remove("hamburger__no-scroll");
        }
        
        return () => {
            document.body.classList.remove("hamburger__no-scroll");
        };
    }, [isOpen]);

    return (
        <div className="hamburger">
            <div className="hamburger__button">
                <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            <div className={`hamburger__menu ${isOpen ? "hamburger__menu--open" : ""}`}>

                <button className="hamburger__close" onClick={() => setOpen(false)}>✖</button>

                <ul className="hamburger__list">
                    {navItems.map(({ name, path }) => {
                        const isPortfolioActive =
                            path === "/portfolio" && (location.pathname.startsWith("/portfolio") || location.pathname.startsWith("/project"));

                        return (
                            <li key={name} className="hamburger__item">
                                <NavLink
                                    to={path}
                                    className={({ isActive }: {isActive: boolean}) =>
                                        `hamburger__link ${(isActive || isPortfolioActive) ? "hamburger__link--active" : ""}`
                                    }
                                    end={path !== "/portfolio"}
                                    onClick={() => setOpen(false)}
                                >
                                    {name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default HamburgerMenu;
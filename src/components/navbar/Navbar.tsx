import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavItem } from "../hamburger/HamburgerMenu";
import "./Navbar.scss";

const Navbar: React.FC = () => {
    const location = useLocation();
    const navItems: NavItem[] = [
        { name: "About", path: "/about" },
        { name: "Resume", path: "/resume" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {navItems.map(({ name, path }) => {
                    const isPortfolioActive =
                        path === "/portfolio" && (location.pathname.startsWith("/portfolio") || location.pathname.startsWith("/project"));

                    return (
                        <li key={name} className="navbar__item">
                            <NavLink
                                to={path}
                                className={({ isActive }: { isActive: boolean }) =>
                                    `navbar__link ${(isActive || isPortfolioActive) ? "navbar__item-active" : ""}`
                                }
                                end={path !== "/portfolio"}
                            >
                                {name}
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
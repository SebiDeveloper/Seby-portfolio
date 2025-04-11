import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    const location = useLocation();
    const navItems = [
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
                                className={({ isActive }) =>
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
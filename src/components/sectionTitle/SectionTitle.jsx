import { useLocation, matchPath } from "react-router-dom";
import portfolioData from "../../utils/portfolioData/portfolioData";

import "./SectionTitle.scss";

const SectionTitle = () => {
    const location = useLocation();

    let title = "Home";

    if (location.pathname === "/about") {
        title = "Seby 🧑‍💻";
    } else if (location.pathname === "/resume") {
        title = "Resume 📱";
    } else if (location.pathname === "/portfolio") {
        title = "Portfolio 💼";
    } else if (location.pathname === "/contact") {
        title = "Contact 📩";
    } else {
        const match = matchPath("/project/:slug", location.pathname);
        if (match) {
            const project = portfolioData.find((p) => p.slug === match.params.slug);
            title = project ? project.title : "Project Not Found";
        }
        
    }

    return <h2 className="section-title">{title}</h2>;
};

export default SectionTitle;

import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import portfolioData from "../../utils/portfolioData/portfolioData";
import "./ProjectDetails.scss";

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = portfolioData.find((item) => item.slug === slug);

    if (!project) {
        return (
            <div className="project project__not-found">
                <button className="project__button" onClick={() => navigate(-1)}>←</button>
                <h2>The project was not found.</h2>
            </div>
        );
    }

    return (
        <div className="project">

        <Helmet>
            <title>{project.title}</title>
            <meta name="description" content="I'm Seby, a front-end developer passionate about creating modern websites and web apps. Project Details" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content="Sebastian" />
            <meta name="keywords" content="portfolio, front-end developer, react, javascript, websites, seby" />
        </Helmet>

            <button className="project__button" onClick={() => navigate(-1)}>←</button>

            <div className="project__image-container">
                <img className="project__img" src={project.image} alt={project.title} />

                <div className="project__hover-details">
                    <div className="project__hover-left">
                        <span>Created with:</span>
                        <div className="project__icons">
                            {project.technologies && project.technologies.map((icon, index) => (
                                <img key={index} src={icon} alt="technology icon" className="project__icon" />
                            ))}
                        </div>
                    </div>
                    <div className="project__hover-right">
                    {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                        ) : (
                            <p>No link available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
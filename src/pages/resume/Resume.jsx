import { Helmet } from "react-helmet-async";

import "./Resume.scss";

const Resume = () => {
  return (
    <section className="resume">

    <Helmet>
      <title>Resume</title>
      <meta name="description" content="I'm Seby, a front-end developer passionate about creating modern websites and web apps." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Sebastian" />
      <meta name="keywords" content="portfolio, front-end developer, react, javascript, websites, seby" />
    </Helmet>

      <div className="resume__section">
        <h3 className="resume__subtitle">🎓 Education</h3>
        <div className="resume__item">
          <h4 className="resume__item-title">Front-End Web Development</h4>
          <p className="resume__item-platform">Udemy</p>
          <p className="resume__item-description">
            Completed multiple hands-on courses in front-end development. Gained practical experience by building responsive web applications using HTML, CSS, JavaScript, and React.
          </p>
        </div>
      </div>

      <div className="resume__section">
        <h3 className="resume__subtitle">🛠️ Skills & Technologies</h3>
        <ul className="resume__skills">
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+)</li>
          <li><strong>Frameworks & Libraries:</strong> React.js, SCSS, Bootstrap</li>
          <li><strong>Tools:</strong> Git & GitHub, npm, Vite, VS Code, Figma</li>
          <li><strong>Concepts:</strong> Responsive Design, Flexbox, CSS Grid, React Hooks, React Router</li>
          <li><strong>Soft Skills:</strong> Problem-solving, attention to detail, time management, continuous learning</li>
        </ul>
      </div>
    </section>
  );
};

export default Resume;
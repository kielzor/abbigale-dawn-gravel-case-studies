import "./MainPage.css";

import { Contact } from "../Contact/Contact.js";

import quoteBox from "../images/quote-container.png";
import designDiamonds from "../images/design-diamonds.png";
import bloom from "../images/bloom-cs-cover.png";
import nasa from "../images/nasa-cs-cover.png";
import inkbook from "../images/inkbook-cs-cover.png";
import resume from "../images/abbigale-gravel-resume.png";

export const MainPage = ({ handlePageSwitch }) => {
  return (
    <div className="main-page-container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lora&family=Merriweather:wght@300&display=swap');
      </style>
      <img
        src={quoteBox}
        alt="inspirational quote"
        className="quote-container"
      />
      <img
        src={designDiamonds}
        alt="design diamonds"
        className="design-diamonds-container"
      />
      <div className="main-section">
        <div className="projects-container">
          <h1 className="projects-header">Projects</h1>
          <p className="projects-text">
            I design visually, audibly, and empathetically. It is my goal to
            honor the UX/UI process from start to finish, creating user centered
            designs and honing my skills.
          </p>
        </div>
        <img
          src={bloom}
          alt="Bloom CS Cover"
          className="cs-cover"
          onClick={() => handlePageSwitch("bloom")}
        />
      </div>
      <div className="main-section">
        <img
          src={nasa}
          alt="Nasa CS Cover"
          className="cs-cover"
          onClick={() => handlePageSwitch("nasa")}
        />
        <div className="projects-container about-me-container">
          <h1 className="projects-header">About Me</h1>
          <p className="projects-text">
            I actively perform, produce, and publish my own music, but I also
            enjoy creative writing, painting, and spending time in nature with
            my dog, Freya. <br />
            <br />
            Freya would like to add that she doesn’t get nearly enough snacks,
            and that this should be remedied immediately.
          </p>
        </div>
      </div>
      <div className="main-section">
        <div className="projects-container">
          <h1 className="projects-header">Contact</h1>
          <p className="projects-text">
            I’d love to discuss technologies and processes, along with any
            design projects I might be a good fit for.
          </p>
          <Contact />
        </div>
        <img
          src={inkbook}
          alt="Inkbook CS Cover"
          className="cs-cover"
          onClick={() => handlePageSwitch("inkbook")}
        />
      </div>
      <h1 className="resume-header">Resumé</h1>
      <img src={resume} alt="Resume" className="resume" />
    </div>
  );
};

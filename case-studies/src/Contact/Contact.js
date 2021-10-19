import "./Contact.css";

import linkedin from "../images/linkedin.png";
import spotify from "../images/spotify.png";

export const Contact = () => {
  const logoLinks = {
    linkedIn: "https://www.linkedin.com/in/abbigale-gravel-3287711b8/",
    spotify: "https://open.spotify.com/artist/7qM84pzkfHaWQmxW9KoE8P",
  };

  return (
    <div className="contact-container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
      </style>
      <div>
        <p>Email: abbigalegravel@gmail.com</p>
        <p>Phone: (720) 774-9905</p>
      </div>
      <div className="media-links-container">
        <img
          src={linkedin}
          alt="Linkedin Icon"
          className="media-links"
          onClick={() => window.open(logoLinks.linkedIn)}
        />
        <img
          src={spotify}
          alt="Spotify Icon"
          className="media-links"
          onClick={() => window.open(logoLinks.spotify)}
        />
      </div>
    </div>
  );
};

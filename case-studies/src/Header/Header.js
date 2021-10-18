import adg from "../images/ADG.png";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header-container">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
      </style>
      <img className="logo" src={adg} />
      <h1 className="header-text">Abbigale Dawn Gravel</h1>
      <div className="blank-header-spacing-div" />
    </div>
  );
};

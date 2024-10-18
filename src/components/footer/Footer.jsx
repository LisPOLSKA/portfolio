import React, { memo } from "react";
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faDiscord, faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Lisko.ovh</p>
        <div className="social-icons">
          <a href="https://github.com/LisPOLSKA" target="_blank" rel="noopener noreferrer" aria-label="link to my github">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://discord.gg/Gd8qBEuVbP" target="_blank" rel="noopener noreferrer" aria-label="link to my discord">
            <FontAwesomeIcon icon={faDiscord} className="icon" />
          </a>
          <a href="https://www.youtube.com/@LiskoDevPL" target="_blank" rel="noopener noreferrer" aria-label="link to my youtube">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>
          <a href="https://www.instagram.com/liskodev/" target="_blank" rel="noopener noreferrer" aria-label="link to my instagram">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;

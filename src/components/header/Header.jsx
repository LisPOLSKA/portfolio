import React, { useState } from "react";
import "./header.scss";
import { NavLink, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Lisko.ovh</span>
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <MenuIcon style={{ fontSize: '2.5rem', color: 'whitesmoke' }} />
      </div>

      {/* Menu nawigacyjne */}
      <nav className={isMenuOpen ? "open" : ""}>
        <NavLink 
          to="/" 
          style={{ textDecoration: "none" }} 
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <HomeIcon />
          <span>Home</span>
        </NavLink>
        <NavLink 
          to="/projects" 
          style={{ textDecoration: "none" }} 
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <FolderOpenIcon />
          <span>Projects</span>
        </NavLink>
        <NavLink 
          to="/contact" 
          style={{ textDecoration: "none" }} 
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          <EmailIcon />
          <span>Contact</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

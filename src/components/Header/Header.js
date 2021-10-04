import React, { useState } from "react";
import { useScrollYPosition } from "react-use-scroll-position";
import { SearchBar } from '../SearchBar';
import "./header.css";

export const Header = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollY = useScrollYPosition();

  const stickeyTrigger = window.innerHeight / 2.75;

  return (
    <div
      className={`nav${scrollY > stickeyTrigger ? " nav-stickey" : ""}${
        menuOpen ? " nav-open" : ""
      }`}>
      <div className="nav-content">
        <div className="nav-logo">SpkhrHeads</div>
        

        <nav className="nav-links__container">
          {links &&
            links.map((link, i) => (
              <a className="nav-link" href={link.href} key={i}>
                <div className="nav-link__text">{link.title}</div>
                <div className="nav-link__background" />
              </a>
            ))}
        </nav>

        <div className="nav-menu__icon" onClick={() => setMenuOpen(!menuOpen)}>
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

Header.defaultProps = {
  links: [
    { title: "About", href: "#home" },
    { title: "Roadmap", href: "#features" },
    { title: "Studio", href: "/studio" },
    { title: "Discord", href: "/discord" },
    { title: "Mint", href: "/mint" },
    { title: "FAQ", href: "#contact" }
  ]
};


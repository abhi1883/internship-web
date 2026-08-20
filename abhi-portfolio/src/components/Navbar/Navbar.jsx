import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <div className="logo">AU</div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ≡
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
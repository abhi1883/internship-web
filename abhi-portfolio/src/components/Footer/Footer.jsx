import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <p>&copy; {year} Abhinanda. All rights reserved</p>
      <nav aria-label="Social links">
        <a href="https://github.com/abhi1883" target="_blank" rel="noreferrer">Github</a>
        <a href="https://www.linkedin.com/in/abhinandha-udupa-b41591427/" target="_blank" rel="noreferrer">LinkedIn</a>
      </nav>
    </footer>
  );
}

export default Footer;
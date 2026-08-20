import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <figure className="profile-figure">
          <img src="/profile.jpg.jpeg" alt="Abhinanda profile" />
          <figcaption>Abhinanda</figcaption>
        </figure>
        <div className="about-text">
          <p>I love building things on the web. Currently learning HTML, CSS, JavaScript, Python and React.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
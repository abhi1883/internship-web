import { useEffect, useState } from "react";
import "./Hero.css";

function Hero() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 17) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  return (
    <section className="hero-section" id="hero">
      <h1>Hey, {greeting}, this is Abhinanda 👋</h1>
      <p className="tagline"><b>I'm a passionate web developer</b></p>
      <div className="hero-button">
        <a href="#projects" className="btn-primary">View My Projects</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>
    </section>
  );
}

export default Hero;
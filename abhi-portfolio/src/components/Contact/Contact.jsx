import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("Send Message");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Enter a valid email";
    if (message.length < 10) newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setStatus("Sending...");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("✅ Message sent");
      form.reset();
      setTimeout(() => setStatus("Send Message"), 3000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Have a project in mind?</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" id="name" name="name" />
          {errors.name && <span className="error-msg">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter your email" id="email" name="email" />
          {errors.email && <span className="error-msg">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell me about your project..."></textarea>
          {errors.message && <span className="error-msg">{errors.message}</span>}
        </div>
        <button type="submit" disabled={status !== "Send Message"}>{status}</button>
      </form>
      <p>Email: <a href="mailto:abhinandha@gmail.com">abhinandha@gmail.com</a></p>
    </section>
  );
}

export default Contact;
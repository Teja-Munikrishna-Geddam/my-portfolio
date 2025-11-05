import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Mail sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send mail.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending mail.");
    }
  };

  return (
    <div className="contact-container" id="Contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit} method="POST">
        <input
          className="input-contact"
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          className="input-contact"
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="input-contact"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button className="submit-button" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

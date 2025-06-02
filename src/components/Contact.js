import React from "react";
import "./Contact.css"; // Assuming you have a Contact.css file for styling

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Email: <a href="mailto:tadej.tolic@gmail.com">[send me a message]</a>
      </p>
      <p>
        LinkedIn:{" "}
        <a
          href="\"
          target="_blank"
          rel="noopener noreferrer"
        >
          [My LinkedIn]
        </a>
      </p>
      <p>
        GitHub:{" "}
        <a
          href="https://github.com/budiz1"
          target="_blank"
          rel="noopener noreferrer"
        >
          [My Github]
        </a>
      </p>

      <p>
        SoundCloud:{" "}
        <a
          href="https://soundcloud.com/tolja"
          target="_blank"
          rel="noopener noreferrer"
        >
          [SoundCloud]
        </a>
      </p>
      {/* Optional: Add a contact form here */}
    </section>
  );
}

export default Contact;

import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About Me</h1>
        <p>
        Penultimate undergraduate of Electrical / Electronics Engineering (Electronics and Computer Engineering Major) at Federal University of Technology, Owerri (FUTO) with hands-on experience with software development, user documentation and a strong desire for design-aided learning. Eager to build out-of-the-box solutions for regional clients across the globe. A good team player knowledgeable about fundamental engineering principles with the ability to take on projects, and lead a diverse team with an agile mindset
        </p>
        <Link to="/contact" className="contact-link">
          Contact Me
        </Link>
        <Link to="/">Back to Home</Link>
        <p></p>
      </div>
    </Card>
  );
}

export default AboutPage;

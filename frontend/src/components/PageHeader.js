import React from 'react';
import { Link } from 'react-router-dom'

export default function PageHeader ({ name }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
      <div className="container">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="index.html" className="navbar-brand">Jake Nielson</a>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#about-section" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#skills-section-head" className="nav-link">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#projects-section-head" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#education-section-head" className="nav-link">Education</a>
            </li>
            <li className="nav-item">
              <a href="#experience-section-head" className="nav-link">Experience</a>
            </li>
            <li className="nav-item">
              <a href="#contact-footer-head" className="nav-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

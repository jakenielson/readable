import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHeader ({ name }) {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">{ name }</Link>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/react" className="nav-link">React</Link>
            </li>
            <li className="nav-item">
              <Link to="/redux" className="nav-link">Redux</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

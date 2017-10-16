import React from 'react';
import { Link } from 'react-router-dom'

export default function PageHeader ({ name }) {
  return (
    <nav>
      <Link to="/">{ name }</Link>
      <Link to="/react">React</Link>
      <Link to="/redux">Redux</Link>
    </nav>
  );
}

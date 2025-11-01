import React from 'react';import { Link } from 'react-router-dom';
import './ButtonGlass.scss';

export default function ButtonGlass({ to, children, size = 'md', variant = 'primary' }) {
  return (
    <Link to={to} className={`btn-glass btn-${size} btn-${variant}`}>
      {children}
    </Link>
  );
}

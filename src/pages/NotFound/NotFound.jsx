import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <h3>
      Ops, algo deu errado...
      <Link to="/">Retorne a página principal</Link>
    </h3>
  );
}
export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
function Navi() {
  return (
    <nav className="Navi">
      <section className="Navi-up">
        <Link to="Oferta">
           <button className="Navi-button">Oferta</button>
        </Link>
        <Link to="/Gallery">
           <button className="Navi-button">Realizacje</button>
        </Link>
      </section>
      <section className="Navi-down">
        <Link to="/Form">
          <button className="Navi-button">Kontakt</button>
        </Link>
        <Link to="/Calculator">
          <button className="Navi-button">Kalkulator</button>
        </Link>
      </section>
    </nav>
  );
}

export default Navi;
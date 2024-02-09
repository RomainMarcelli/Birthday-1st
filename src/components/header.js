// header.js
import React from 'react';
import '../css/header.css';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg border-bottom border-dark border-2 px-3">
        <div class="container-fluid">
          <p class="text-uppercase fs-2 fw-bold custom-line-height">Citation et Anniversaires</p>
          <p class="text-uppercase fs-2 fw-bold custom-line-height">

            Mercredi 08 Mars 2023
          </p>
        </div>
      </nav>

      {/* Ajoutez d'autres éléments d'en-tête ici */}
    </header>
  );
};

export default Header;

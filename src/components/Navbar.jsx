
import { useState } from 'react';

function Navbar({ language, setLanguage, translations }) {

  // Controla si el menú móvil está abierto o cerrado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <a href="#home" className="navbar-logo">
        KB
      </a>

      {/* Botón que aparece en móviles */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir o cerrar menú"
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Enlaces e idiomas */}
      <div className={`navbar-menu ${menuOpen ? 'is-open' : ''}`}>

        <ul className="navbar-links">
          <li>
            <a href="#home" onClick={() => setMenuOpen(false)}>
              {translations.home}
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              {translations.about}
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              {translations.projects}
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {translations.contact}
            </a>
          </li>
        </ul>

        <div className="language-selector">
          <button
            className={language === 'es' ? 'active' : ''}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>

          <span>/</span>

          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;

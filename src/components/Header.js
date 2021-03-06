import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">Chatty</Link>
        <button type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
        </button>
        <div id="navbarNavAltMarkup">
            {auth().currentUser
            ? <div>
            <Link className="btn mr-3 text-white" to="/chat">Profile</Link>
            <button className="btn btn-dark mr-3" onClick={() => auth().signOut()}>Salir</button>
            </div>
            : <div>
            <Link className="btn mr-3 text-white btn-header" to="/login">Iniciar sesión</Link>
            <Link className="btn mr-3 text-white btn-header" to="/signup">Registrarse</Link>
            </div>}
        </div>
      </nav>
    </header>
  );
}

export default Header;
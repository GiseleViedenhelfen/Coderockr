import React from 'react';
import './Style.css';
import Popup from 'reactjs-popup';
import ContactForm from '../Contact/Contact';

function Header() {
  return (
    <section className="header-container">
      <h2>Rocker Blog</h2>
      <section className="header-subcontainer">
        <h2>Posts</h2>
        <Popup
          trigger={(
            <button type="button" className="button-contact">
              Contact
            </button>
          )}
          modal
        >
          <span>
            <ContactForm />
          </span>
        </Popup>
      </section>
    </section>
  );
}
export default Header;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import Popup from 'reactjs-popup';
import ContactForm from '../Contact/Contact';

function Header() {
  const navigate = useNavigate();
  const getHeader = document.getElementById('header-container');
  window.onscroll = () => {
    const sticky = getHeader.offsetTop;
    if (window.pageYOffset > sticky) {
      getHeader.classList.add('sticky');
    } else {
      getHeader.classList.remove('sticky');
    }
  };
  const clickHome = () => {
    const url = document.location.href;
    if (url === 'http://localhost:3000/') {
      return document.location.reload(true);
    }
    return navigate('/');
  };
  return (
    <section className="header-container" id="header-container">
      <button
        type="button"
        onClick={clickHome}
        className="button-homepage"
      >
        <h2>Rockr Blog</h2>
      </button>

      <section className="header-subcontainer">
        <button
          type="button"
          className="button-header"
          onClick={() => document.location.reload(true)}
        >
          Posts
        </button>
        <Popup
          trigger={(
            <button
              type="button"
              className="button-header"
            >
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

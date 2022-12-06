import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import Popup from 'reactjs-popup';
import ContactForm from '../Contact/Contact';
import closeIcon from '../../icons/closeIcon.png';

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
      <section className="button-homepage">
        <button
          type="button"
          onClick={clickHome}
        >
          Rockr Blog
        </button>
      </section>

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
          position="center"
        >

          { (close) => (
            <span className="modal-novo">
              <button onClick={close} type="button" className="close-popup-button">
                <img
                  src={closeIcon}
                  alt="press to close popup"
                  width="50%"
                  className="close-popup-icon"
                />
              </button>
              <ContactForm />
            </span>
          )}
        </Popup>
      </section>
    </section>
  );
}
export default Header;

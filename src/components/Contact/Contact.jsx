import React, { useState } from 'react';
import './Style.css';
import contactIsDisable from '../../helpers/utils/Validations';
import seta from '../../icons/buttonVector.png';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  function onlynumber(evt) {
    const theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  }
  const feedbackToUser = () => {
    const checkData = contactIsDisable(email, name);
    let result;
    if (checkData) {
      result = 'dados invalidos';
    } if (!checkData) {
      result = 'post inserido!';
    }
    return global.window.alert(result);
  };

  return (
    <div className="popup-container">

      <h2>Contact</h2>
      <form className="form-container">
        <label htmlFor="Name" className="label-input">
          Name
          <input
            type="text"
            value={name}
            id="Name"
            placeholder="Fill your full name"
            className="input"
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label htmlFor="Email" className="label-input">
          Email
          <input
            type="email"
            value={email}
            id="Email"
            placeholder="Fill a valid e-mail"
            className="input"
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label htmlFor="phone-number" className="label-input">
          Phone
          <input
            type="text"
            onKeyPress={onlynumber}
            value={phone}
            id="phone-number"
            placeholder="Fill your phone"
            className="input"
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label htmlFor="post-content" className="label-input">
          Post
          <textarea
            id="post-content"
            placeholder="post..."
            className="input"
          />
        </label>
        <button
          type="button"
          className="button-submit"
          onClick={feedbackToUser}
        >
          <img src={seta} alt="btn-arrow" />
          <h3> Submit</h3>
        </button>
      </form>
    </div>
  );
}
export default ContactForm;

import React, { useState } from 'react';
import './Style.css';
import contactIsDisable from '../../helpers/utils/Validations';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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
            type="tel"
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
          disabled={contactIsDisable(email, name)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm;

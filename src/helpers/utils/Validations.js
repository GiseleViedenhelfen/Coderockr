const nameMinLength = 12;
const emailRegex = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,3})$/i;

const isEmailValid = (email) => emailRegex.test(email);

const isValidName = (name) => name.length >= nameMinLength;

const contactIsDisable = (email, name) => (
  !isEmailValid(email) || !isValidName(name));

export default contactIsDisable;

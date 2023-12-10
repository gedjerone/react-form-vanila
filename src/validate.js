const emailRegExp = RegExp(
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
);

const passwordRegExp = RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
);

const isCorrectEmail = (email) => {
  if (email && emailRegExp.test(email)) {
    return true;
  }
  return false;
};

const isCorrectPassword = (password) => {
  if (password && passwordRegExp.test(password)) {
    return true;
  }
  return false;
};

const isPasswordsMatch = (pwdx, pwdy) => {
  if (pwdx && pwdy && pwdx === pwdy) {
    return true;
  }
  return false;
};

export const validate = ({ email, password, repeatPassword }) => {
  if (!isCorrectEmail(email)) {
    return {
      isPassword: false,
      message: "Email isn't correct. Please provide real email address again",
    };
  }
  if (!isCorrectPassword(password)) {
    return {
      isPassword: true,
      message: "Provided password is weak. Please follow:",
    };
  }
  if (!isPasswordsMatch(password, repeatPassword)) {
    return {
      isPassword: false,
      message: "Passwords don't match. Please try again",
    };
  }
  return true;
};

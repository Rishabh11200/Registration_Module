import React from 'react';

export function isEmailCheck(email) {
  let emailVerified = true;
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (email == '') {
    emailVerified = false;
  } else if (!regEx.test(email)) {
    emailVerified = false;
  }
  return emailVerified;
}

export function isPassCheck(pass) {
  let passVerified = true;
  let regEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
  if (pass == '') {
    passVerified = false;
  } else if (!regEx.test(pass)) {
    passVerified = false;
  }

  return passVerified;
}

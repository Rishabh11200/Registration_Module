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

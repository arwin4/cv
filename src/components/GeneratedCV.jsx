/* eslint-disable react/prop-types */

import '../styles/GeneratedCV.css';

export default function GeneratedCV({ generalInfo }) {
  let fullNameText;
  if (generalInfo.fullName === '') {
    fullNameText = 'Ferdinand Grapperhaus';
  } else {
    fullNameText = generalInfo.fullName;
  }

  let emailText;
  if (generalInfo.email === '') {
    emailText = 'email@website.dev';
  } else {
    emailText = generalInfo.email;
  }

  let phoneText;
  if (generalInfo.phone === '') {
    phoneText = '+31 0123 4567';
  } else {
    phoneText = generalInfo.phone;
  }

  return (
    <div className="generated-cv">
      {' '}
      <p>{fullNameText}</p>
      <p>{emailText}</p>
      <p>{phoneText}</p>
    </div>
  );
}

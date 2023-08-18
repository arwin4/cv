/* eslint-disable react/prop-types */

import GeneralInfo from './form/GeneralInfo';

export default function Form({
  generalInfo,
  onFullNameChange,
  onEmailChange,
  onPhoneChange,
  handleHideForm,
}) {
  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        onFullNameChange={onFullNameChange}
        onEmailChange={onEmailChange}
        onPhoneChange={onPhoneChange}
        handleHideForm={handleHideForm}
      ></GeneralInfo>
      <button onClick={handleHideForm}>Hide form</button>
    </>
  );
}

/* eslint-disable react/prop-types */

import GeneralInfo from './form/GeneralInfo';

export default function Form({
  generalInfo,
  onFullNameChange,
  onEmailChange,
  onPhoneChange,
}) {
  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        onFullNameChange={onFullNameChange}
        onEmailChange={onEmailChange}
        onPhoneChange={onPhoneChange}
      ></GeneralInfo>
    </>
  );
}

/* eslint-disable react/prop-types */

import GeneralInfo from './form/GeneralInfo';

export default function Form({
  generalInfo,
  handleGeneralInfoChange,
  handleHideForm,
}) {
  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        handleGeneralInfoChange={handleGeneralInfoChange}
        handleHideForm={handleHideForm}
      ></GeneralInfo>
      <button onClick={handleHideForm}>Hide form</button>
    </>
  );
}

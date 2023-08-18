/* eslint-disable react/prop-types */

import GeneralInfo from './form/GeneralInfo';
import FormSection from './FormSection';

export default function Form({
  generalInfo,
  handleGeneralInfoChange,
  handleHideForm,
}) {
  return (
    <>
      <FormSection className="general-info" sectionTitle="General Info">
        <GeneralInfo
          generalInfo={generalInfo}
          handleGeneralInfoChange={handleGeneralInfoChange}
        ></GeneralInfo>
      </FormSection>

      <button onClick={handleHideForm}>Hide form</button>
    </>
  );
}

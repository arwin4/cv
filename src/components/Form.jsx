/* eslint-disable react/prop-types */

import FormSection from './FormSection';
import GeneralInfo from './form/GeneralInfo';
import Education from './form/Education';

export default function Form({
  generalInfo,
  handleGeneralInfoChange,
  educationInfo,
  handleEducationInfoChange,
  handleHideForm,
}) {
  return (
    <>
      <FormSection className="general-info" sectionTitle="General information">
        <GeneralInfo
          generalInfo={generalInfo}
          handleGeneralInfoChange={handleGeneralInfoChange}
        ></GeneralInfo>
      </FormSection>

      <FormSection className="education-info" sectionTitle="Education">
        <Education
          educationInfo={educationInfo}
          handleEducationInfoChange={handleEducationInfoChange}
        ></Education>
      </FormSection>

      <button onClick={handleHideForm}>Hide form</button>
    </>
  );
}

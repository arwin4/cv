/* eslint-disable react/prop-types */

import FormSection from './FormSection';
import GeneralInfo from './form/GeneralInfo';
import Education from './form/Education';
import ExperienceOverview from './form/ExperienceList';
import Experience from './form/Experience';
import { useImmer } from 'use-immer';

export default function Form({
  generalInfo,
  handleGeneralInfoChange,
  educationInfo,
  handleEducationInfoChange,
  experienceList,
  addExperience,
  deleteExperience,
  handleHideForm,
}) {
  const [experienceFormVisible, setExperienceFormVisibility] = useImmer(false);

  function showNewExperienceForm() {
    setExperienceFormVisibility(true);
  }

  function hideNewExperienceForm() {
    setExperienceFormVisibility(false);
  }

  function handleExperienceSubmit(e) {
    e.preventDefault();
    addExperience(e);
    hideNewExperienceForm();
  }

  if (experienceFormVisible)
    return (
      <Experience
        experienceInfo={experienceList}
        handleExperienceSubmit={handleExperienceSubmit}
        hideNewExperienceForm={hideNewExperienceForm}
      ></Experience>
    );

  return (
    <>
      <FormSection className="general-info" sectionTitle="Personal information">
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

      <FormSection className="experience-info" sectionTitle="Work history">
        <ExperienceOverview
          showExperienceForm={showNewExperienceForm}
          experienceList={experienceList}
          deleteExperience={deleteExperience}
        ></ExperienceOverview>
      </FormSection>

      <button onClick={handleHideForm}>Hide form</button>
    </>
  );
}

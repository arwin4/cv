/* eslint-disable react/prop-types */

import FormSection from './FormSection';
import GeneralInfo from './form/GeneralInfo';
import Education from './form/Education';
import ExperienceOverview from './form/ExperienceList';
import Experience from './form/Experience';
import EditExperience from './form/EditExperience';
import { useImmer } from 'use-immer';
import { produce } from 'immer';

export default function Form({
  generalInfo,
  handleGeneralInfoChange,
  educationInfo,
  handleEducationInfoChange,
  experienceList,
  addExperience,
  updateExperienceList,
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

  const [editExperienceFormVisible, setEditExperienceFormVisibility] =
    useImmer(false);

  function showEditExperienceForm() {
    setEditExperienceFormVisibility(true);
  }

  function hideEditExperienceForm() {
    setEditExperienceFormVisibility(false);
  }

  const [experienceToEdit, setExperienceToEdit] = useImmer(null);

  function handleEditExperience(id) {
    const experience = experienceList.find(
      (experience) => experience.id === id,
    );
    setExperienceToEdit(experience);
    showEditExperienceForm();
  }

  function handleExperienceChange(id, e) {
    const updatedExperiences = produce(experienceList, (draft) => {
      const index = draft.findIndex((experience) => experience.id === id);
      if (index !== -1) draft[index][e.target.id] = e.target.value;
    });
    updateExperienceList(updatedExperiences);
  }

  if (experienceFormVisible)
    return (
      <Experience
        handleExperienceSubmit={handleExperienceSubmit}
        hideNewExperienceForm={hideNewExperienceForm}
      ></Experience>
    );

  if (editExperienceFormVisible) {
    return (
      <EditExperience
        experienceToEdit={experienceToEdit}
        handleExperienceChange={handleExperienceChange}
        hideEditExperienceForm={hideEditExperienceForm}
      ></EditExperience>
    );
  }

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
          handleEditExperience={handleEditExperience}
        ></ExperienceOverview>
      </FormSection>

      <button onClick={handleHideForm}>Hide form</button>
    </>
  );
}

/* eslint-disable react/prop-types */

export default function handleEditExperience({
  experienceToEdit,
  handleExperienceChange,
  hideEditExperienceForm,
}) {
  return (
    <div className="edit-experience">
      <h1>Editing work experience...</h1>
      <form id="edit-experience-form">
        <div className="input-wrapper">
          <label htmlFor="company">Company </label>
          <input
            name="company"
            type="text"
            id="company"
            defaultValue={experienceToEdit.company}
            onChange={(e) => handleExperienceChange(experienceToEdit.id, e)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="position">Position </label>
          <input
            name="position"
            type="text"
            id="position"
            defaultValue={experienceToEdit.position}
            onChange={(e) => handleExperienceChange(experienceToEdit.id, e)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="responsibilities">Responsibilities </label>
          <input
            name="responsibilities"
            type="text"
            id="responsibilities"
            defaultValue={experienceToEdit.responsibilities}
            onChange={(e) => handleExperienceChange(experienceToEdit.id, e)}
          />
        </div>{' '}
        <div className="input-wrapper">
          <label htmlFor="employment-start-date">Employment start date </label>
          <input
            name="employmentStartDate"
            type="text"
            id="employment-start-date"
            defaultValue={experienceToEdit.employmentStartDate}
            onChange={(e) => handleExperienceChange(experienceToEdit.id, e)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="employment-end-date">
            Employment end date{' '}
            <span className="employment-end-date-comment">
              (leave empty if currently employed)
              {/* TODO: checkbox (currently employed) */}
            </span>
          </label>

          <input
            name="employmentEndDate"
            type="text"
            id="employment-end-date"
            defaultValue={experienceToEdit.employmentEndDate}
            onChange={(e) => handleExperienceChange(experienceToEdit.id, e)}
          />
        </div>
      </form>
      <button className="cancel">Cancel</button>
      <button
        form="experience-form"
        // type="submit"
        className="submit-experience"
        onClick={hideEditExperienceForm}
      >
        Submit
      </button>
    </div>
  );
}

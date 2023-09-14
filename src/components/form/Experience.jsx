/* eslint-disable react/prop-types */

export default function Experience({
  handleExperienceSubmit,
  hideNewExperienceForm,
}) {
  return (
    <div className="experience-info">
      <h1>Add a new work experience</h1>
      <form id="experience-form" onSubmit={handleExperienceSubmit}>
        <div className="input-wrapper">
          <label htmlFor="company">Company </label>
          <input name="company" type="text" id="company" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="position">Position </label>
          <input name="position" type="text" id="position" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="responsibilities">Responsibilities </label>
          <input name="responsibilities" type="text" id="responsibilities" />
        </div>{' '}
        <div className="input-wrapper">
          <label htmlFor="employment-start-date">Employment start date </label>
          <input
            name="employmentStartDate"
            type="text"
            id="employment-start-date"
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
          />
        </div>
      </form>
      <button className="cancel" onClick={hideNewExperienceForm}>
        Cancel
      </button>
      <button
        form="experience-form"
        type="submit"
        className="submit-experience"
      >
        Add this experience (you can edit it later)
      </button>
    </div>
  );
}

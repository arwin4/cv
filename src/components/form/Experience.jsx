/* eslint-disable react/prop-types */

export default function Experience({ experienceInfo, handleExperienceSubmit }) {
  return (
    <div className="experience-info">
      <form onSubmit={handleExperienceSubmit}>
        <div className="input-wrapper">
          <label htmlFor="company">Company </label>
          <input
            name="company"
            type="text"
            id="company"
            value={experienceInfo.company}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="position">Position </label>
          <input
            name="position"
            type="text"
            id="position"
            value={experienceInfo.position}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="responsibilities">Responsibilities </label>
          <input
            name="responsibilities"
            type="text"
            id="responsibilities"
            value={experienceInfo.responsibilities}
          />
        </div>{' '}
        <div className="input-wrapper">
          <label htmlFor="employment-start-date">Employment start date </label>
          <input
            name="employmentStartDate"
            type="text"
            id="employment-start-date"
            value={experienceInfo.employmentStartDate}
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
            value={experienceInfo.employmentEndDate}
          />
        </div>
        <button type="submit" className="submit-experience">
          Add this experience
        </button>
      </form>
    </div>
  );
}

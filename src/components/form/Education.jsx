/* eslint-disable react/prop-types */

export default function Education({
  educationInfo,
  handleEducationInfoChange,
}) {
  return (
    <div className="general-info">
      <form>
        <div className="input-wrapper">
          <label htmlFor="school">School </label>
          <input
            name="school"
            type="text"
            id="school"
            defaultValue={educationInfo.school}
            onChange={handleEducationInfoChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="study-title">Title of study </label>
          <input
            name="studyTitle"
            type="text"
            id="study-title"
            defaultValue={educationInfo.studyTitle}
            onChange={handleEducationInfoChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="graduation-year">Graduation year </label>
          <input
            name="graduationYear"
            type="text"
            id="graduation-year"
            defaultValue={educationInfo.graduationYear}
            onChange={handleEducationInfoChange}
          />
        </div>
      </form>
    </div>
  );
}

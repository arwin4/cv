/* eslint-disable react/prop-types */

import '../styles/GeneratedCV.css';

export default function GeneratedCV({
  generalInfo,
  educationInfo,
  handleShowForm,
}) {
  return (
    <div className="generated-cv">
      <div className="general-info">
        <div className="fields-titles">
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
        </div>
        <div className="fields-content">
          <p>{generalInfo.fullName}</p>
          <p>{generalInfo.email}</p>
          <p>{generalInfo.phone}</p>
        </div>
      </div>

      <div className="education-info">
        <div className="fields-titles">
          <p>School</p>
          <p>Title of study</p>
          <p>Graduation year</p>
        </div>
        <div className="fields-content">
          <p>{educationInfo.school}</p>
          <p>{educationInfo.studyTitle}</p>
          <p>{educationInfo.graduationYear}</p>
        </div>
      </div>

      <button onClick={handleShowForm}>Edit</button>
    </div>
  );
}

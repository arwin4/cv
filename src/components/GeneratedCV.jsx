/* eslint-disable react/prop-types */

import '../styles/GeneratedCV.css';

export default function GeneratedCV({
  generalInfo,
  educationInfo,
  jobInfo,
  hideCV,
}) {
  const jobs = jobInfo.map((job) => (
    <div className="job-item" key={job.id}>
      <div className="fields-titles">
        <p>Company</p>
        <p>Position</p>
        <p>Responsibilities</p>
        <p>Employed from/to</p>
      </div>
      <div className="fields-content">
        <p>{job.company}</p>
        <p>{job.position}</p>
        <p>{job.responsibilities}</p>
        <p>
          {job.employmentStartDate} -{' '}
          {job.employmentEndDate === '' ? 'present' : job.employmentEndDate}
        </p>
      </div>
    </div>
  ));

  console.log(jobInfo);

  return (
    <>
      <div className="generated-cv">
        <div className="general-info-container">
          <h2 className="general-info-title">General information</h2>
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
        </div>

        <div className="education-info-container">
          <h2 className="education-info-title">Education</h2>

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
        </div>

        <div className="jobs-container">
          <h2 className="jobs-title">Work Experience</h2>
          <div className="jobs">{jobs}</div>
        </div>
      </div>
      <button onClick={hideCV}>Edit</button>
    </>
  );
}

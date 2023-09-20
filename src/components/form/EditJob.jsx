/* eslint-disable react/prop-types */

import { InlineIcon } from '@iconify/react';
import '../../styles/EditJob.css';

export default function handleEditJobButton({
  jobToEdit,
  handleJobChange,
  hideEditJobForm,
}) {
  return (
    <div className="edit-job">
      <h1>Editing work experience...</h1>
      <form id="edit-job-form" onSubmit={hideEditJobForm}>
        <div className="input-wrapper">
          <label htmlFor="company">Company </label>
          <input
            name="company"
            type="text"
            id="company"
            value={jobToEdit.company}
            onChange={(e) => handleJobChange(jobToEdit.id, e)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="position">Position </label>
          <input
            name="position"
            type="text"
            id="position"
            value={jobToEdit.position}
            onChange={(e) => handleJobChange(jobToEdit.id, e)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="responsibilities">Responsibilities </label>
          <input
            name="responsibilities"
            type="text"
            id="responsibilities"
            value={jobToEdit.responsibilities}
            onChange={(e) => handleJobChange(jobToEdit.id, e)}
          />
        </div>{' '}
        <div className="input-wrapper">
          <label htmlFor="employment-start-date">Employment start date </label>
          <input
            name="employmentStartDate"
            type="text"
            id="employment-start-date"
            value={jobToEdit.employmentStartDate}
            onChange={(e) => handleJobChange(jobToEdit.id, e)}
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
            value={jobToEdit.employmentEndDate}
            onChange={(e) => handleJobChange(jobToEdit.id, e)}
          />
        </div>
      </form>
      <button form="edit-job-form" className="submit-job-button generic-button">
        <InlineIcon icon="lucide:save" /> Save and return
      </button>
    </div>
  );
}

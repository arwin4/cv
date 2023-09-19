/* eslint-disable react/prop-types */

import FormSection from './FormSection';
import GeneralInfo from './form/GeneralInfo';
import Education from './form/Education';
import JobOverview from './form/JobList';
import Job from './form/Job';
import EditJob from './form/EditJob';
import { useImmer } from 'use-immer';
import { produce } from 'immer';
import { Icon } from '@iconify/react';

export default function Form({
  generalInfo,
  setGeneralInfo,
  educationInfo,
  setEducationInfo,
  jobInfo,
  addJob,
  setJobList,
  deleteJob,
  showCV,
}) {
  function handleGeneralInfoChange(e) {
    setGeneralInfo((draft) => {
      draft[e.target.name] = e.target.value;
    });
  }

  function handleEducationInfoChange(e) {
    setEducationInfo((draft) => {
      draft[e.target.name] = e.target.value;
    });
  }

  function handleJobChange(id, e) {
    const updatedJobs = produce(jobInfo, (draft) => {
      const index = draft.findIndex((job) => job.id === id);
      if (index !== -1) draft[index][e.target.name] = e.target.value;
    });
    setJobList(updatedJobs);
  }

  const [jobFormVisible, setJobFormVisibility] = useImmer(false);

  function showNewJobForm() {
    setJobFormVisibility(true);
  }

  function hideNewJobForm() {
    setJobFormVisibility(false);
  }

  function handleJobSubmit(e) {
    e.preventDefault();
    addJob(e);
    hideNewJobForm();
  }

  const [editJobFormVisible, setEditJobFormVisibility] = useImmer(false);

  function showEditJobForm() {
    setEditJobFormVisibility(true);
  }

  function hideEditJobForm() {
    setEditJobFormVisibility(false);
  }

  const [jobToEdit, setJobToEdit] = useImmer(null);

  function handleEditJobButton(id) {
    const job = jobInfo.find((job) => job.id === id);
    setJobToEdit(job);
    showEditJobForm();
  }

  if (jobFormVisible)
    return (
      <Job
        handleJobSubmit={handleJobSubmit}
        hideNewJobForm={hideNewJobForm}
      ></Job>
    );

  if (editJobFormVisible) {
    return (
      <EditJob
        jobToEdit={jobToEdit}
        handleJobChange={handleJobChange}
        hideEditJobForm={hideEditJobForm}
      ></EditJob>
    );
  }

  return (
    <div className="form">
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
      <FormSection className="job-info" sectionTitle="Work history">
        <JobOverview
          showNewJobForm={showNewJobForm}
          jobInfo={jobInfo}
          deleteJob={deleteJob}
          handleEditJobButton={handleEditJobButton}
        ></JobOverview>
      </FormSection>
      <div className="generate-cv-wrapper">
        <span className="generate-cv-button" type="button" onClick={showCV}>
          <Icon
            className="generate-cv-icon"
            aria-label="Generate CV"
            icon="lucide:sparkles"
          />
          Generate CV!
        </span>
        <div className="revision-disclaimer">
          You&apos;ll be able to edit your CV after generating.
        </div>
      </div>
    </div>
  );
}

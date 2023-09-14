/* eslint-disable react/prop-types */

import FormSection from './FormSection';
import GeneralInfo from './form/GeneralInfo';
import Education from './form/Education';
import JobOverview from './form/JobList';
import Job from './form/Job';
import EditJob from './form/EditJob';
import { useImmer } from 'use-immer';
import { produce } from 'immer';

export default function Form({
  generalInfo,
  handleGeneralInfoChange,
  educationInfo,
  handleEducationInfoChange,
  jobInfo,
  addJob,
  setJobList,
  deleteJob,
  handleHideForm,
}) {
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

  function handleJobChange(id, e) {
    const updatedJobs = produce(jobInfo, (draft) => {
      const index = draft.findIndex((job) => job.id === id);
      if (index !== -1) draft[index][e.target.id] = e.target.value;
    });
    setJobList(updatedJobs);
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

      <FormSection className="job-info" sectionTitle="Work history">
        <JobOverview
          showNewJobForm={showNewJobForm}
          jobInfo={jobInfo}
          deleteJob={deleteJob}
          handleEditJobButton={handleEditJobButton}
        ></JobOverview>
      </FormSection>

      <button onClick={handleHideForm}>Hide form</button>
    </>
  );
}

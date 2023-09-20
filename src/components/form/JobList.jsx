/* eslint-disable react/prop-types */

import { Icon, InlineIcon } from '@iconify/react';

export default function JobOverview({
  jobInfo,
  showNewJobForm,
  deleteJob,
  handleEditJobButton,
}) {
  const jobs = jobInfo.map((job) => (
    <>
      <li key={job.id}>{job.company}</li>
      <span className="list-icon-wrapper">
        {' '}
        <Icon
          type="button"
          className="edit"
          aria-label="Edit this job"
          icon="lucide:edit"
          onClick={() => handleEditJobButton(job.id)}
        />
        <Icon
          type="button"
          className="delete"
          aria-label="Delete this job"
          icon="lucide:trash-2"
          onClick={() => deleteJob(job.id)}
        />
      </span>
    </>
  ));

  return (
    <div>
      <h4>
        {jobInfo?.length ? jobInfo.length : '0'}{' '}
        {jobInfo?.length === 1 ? 'job' : 'jobs'} added.{' '}
        {jobInfo?.length >= 3
          ? 'Replace a job to add a different one.'
          : `You may add ${3 - jobInfo?.length} more.`}
      </h4>

      <ul className="job-list">{jobs}</ul>

      {jobInfo.length < 3 && (
        <>
          <button className="add-job-button" onClick={showNewJobForm}>
            <InlineIcon aria-label="Add new job" icon="lucide:plus-square" />{' '}
            Add another job
          </button>
        </>
      )}
    </div>
  );
}

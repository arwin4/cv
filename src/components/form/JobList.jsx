/* eslint-disable react/prop-types */

import { Icon, InlineIcon } from '@iconify/react';

export default function JobOverview({
  jobInfo,
  showNewJobForm,
  deleteJob,
  handleEditJobButton,
}) {
  const jobs = jobInfo.map((job) => (
    <li key={job.id}>
      {job.company}
      <span className="list-icon-wrapper">
        {' '}
        <Icon
          tabIndex="0"
          type="button"
          className="edit"
          aria-label="Edit this job"
          icon="lucide:edit"
          onClick={() => handleEditJobButton(job.id)}
        />
        <Icon
          tabIndex="0"
          type="button"
          className="delete"
          aria-label="Delete this job"
          icon="lucide:trash-2"
          onClick={() => deleteJob(job.id)}
        />
      </span>
    </li>
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
          <button
            className="add-job-button generic-button"
            onClick={showNewJobForm}
          >
            <InlineIcon aria-label="Add new job" icon="lucide:plus-circle" />{' '}
            Add another job
          </button>
        </>
      )}
    </div>
  );
}

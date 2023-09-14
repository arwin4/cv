/* eslint-disable react/prop-types */

export default function JobOverview({
  jobInfo,
  showNewJobForm,
  deleteJob,
  handleEditJobButton,
}) {
  const jobs = jobInfo.map((job) => (
    <li key={job.id}>
      {job.company}
      <button className="edit" onClick={() => handleEditJobButton(job.id)}>
        Edit
      </button>
      <button className="delete" onClick={() => deleteJob(job.id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <h2>
        {jobInfo?.length ? jobInfo.length : '0'}{' '}
        {jobInfo?.length === 1 ? 'job' : 'jobs'} added.{' '}
        {jobInfo?.length >= 3
          ? 'Replace a job to add a different one.'
          : `You may add ${3 - jobInfo?.length} more.`}
      </h2>

      <ul>{jobs}</ul>

      {jobInfo.length < 3 && (
        <button onClick={showNewJobForm}>Add a work experience</button>
      )}
    </div>
  );
}

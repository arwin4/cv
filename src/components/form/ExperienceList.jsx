/* eslint-disable react/prop-types */

export default function ExperienceOverview({
  experienceList,
  showExperienceForm,
}) {
  const experiences = experienceList.map((experience) => (
    <li key={experience.id}>
      {experience.company}
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </li>
  ));

  return (
    <div>
      <h2>
        {experienceList?.length ? experienceList.length : '0'}{' '}
        {experienceList?.length === 1 ? 'job' : 'jobs'} added. You may add{' '}
        {3 - experienceList?.length} more.
      </h2>

      <ul>{experiences}</ul>

      {experienceList.length < 3 && (
        <button onClick={showExperienceForm}>Add a work experience</button>
      )}
    </div>
  );
}

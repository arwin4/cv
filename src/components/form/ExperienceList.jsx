/* eslint-disable react/prop-types */

export default function ExperienceOverview({
  experienceList,
  showExperienceForm,
}) {
  return (
    <div className="experience-list">
      <h2>
        You&apos;ve added {experienceList?.length ? experienceList.length : '0'}{' '}
        {experienceList?.length === 1 ? 'job' : 'jobs'}. You may add up to 3
        jobs or other relevant work experiences.
      </h2>
      <button onClick={showExperienceForm}>Add a work experience</button>
    </div>
  );
}

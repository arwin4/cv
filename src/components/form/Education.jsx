/* eslint-disable react/prop-types */

export default function Education({
  EdcuationInfo,
  handleEducationInfoChange,
}) {
  return (
    <div className="education">
      <form>
        <label htmlFor="school">School </label>
        <input
          name="fullName"
          type="text"
          id="full_name"
          value={generalInfo.fullName}
          onChange={handleGeneralInfoChange}
        />
        <p></p>
        <label htmlFor="email">Email </label>
        <input
          name="email"
          type="email"
          id="email"
          value={generalInfo.email}
          onChange={handleGeneralInfoChange}
        />
        <p></p>
        <label htmlFor="phone">Phone </label>
        <input
          name="phone"
          type="tel"
          id="phone"
          value={generalInfo.phone}
          onChange={handleGeneralInfoChange}
        />
      </form>
    </div>
  );
}

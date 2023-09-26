/* eslint-disable react/prop-types */

export default function GeneralInfo({ generalInfo, handleGeneralInfoChange }) {
  return (
    <div className="general-info">
      <form>
        <div className="input-wrapper">
          <label htmlFor="full_name">Full name </label>
          <input
            name="fullName"
            type="text"
            id="full_name"
            autoComplete="name"
            value={generalInfo.fullName}
            onChange={handleGeneralInfoChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email </label>
          <input
            name="email"
            type="email"
            id="email"
            autoComplete="email"
            value={generalInfo.email}
            onChange={handleGeneralInfoChange}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="phone">Phone </label>
          <input
            name="phone"
            type="tel"
            id="phone"
            autoComplete="phone"
            value={generalInfo.phone}
            onChange={handleGeneralInfoChange}
          />
        </div>
      </form>
    </div>
  );
}

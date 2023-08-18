/* eslint-disable react/prop-types */

import '../../styles/GeneralInfo.css';

export default function GeneralInfo({ generalInfo, handleGeneralInfoChange }) {
  return (
    <div className="general-info">
      <form>
        <label htmlFor="full_name">Full name </label>
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

/* eslint-disable react/prop-types */

export default function GeneralInfo({
  generalInfo,
  onFullNameChange,
  onEmailChange,
  onPhoneChange,
}) {
  return (
    <>
      <form>
        <label htmlFor="full_name">Full name </label>
        <input
          type="text"
          id="full_name"
          value={generalInfo.fullName}
          onChange={onFullNameChange}
        />
        <p></p>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          id="email"
          value={generalInfo.email}
          onChange={onEmailChange}
        />
        <p></p>
        <label htmlFor="phone">Phone </label>
        <input
          type="tel"
          id="phone"
          value={generalInfo.phone}
          onChange={onPhoneChange}
        />
      </form>
    </>
  );
}

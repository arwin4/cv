export default function GeneralInfo({
  generalInfo,
  onFullNameChange,
  onEmailChange,
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
          type="text"
          id="email"
          value={generalInfo.email}
          onChange={onEmailChange}
        />
      </form>
    </>
  );
}

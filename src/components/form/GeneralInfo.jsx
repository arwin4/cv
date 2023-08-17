export default function GeneralInfo({ fullName, onFullNameChange }) {
  return (
    <>
      <form>
        <label htmlFor="full_name">Full name </label>
        <input
          type="text"
          id="full_name"
          value={fullName}
          onChange={onFullNameChange}
        />
      </form>
    </>
  );
}

import GeneralInfo from './form/GeneralInfo';

export default function Form({ fullName, onFullNameChange }) {
  return (
    <>
      <GeneralInfo
        fullName={fullName}
        onFullNameChange={onFullNameChange}
      ></GeneralInfo>
    </>
  );
}

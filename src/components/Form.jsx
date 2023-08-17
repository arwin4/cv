import GeneralInfo from './form/GeneralInfo';

export default function Form({ generalInfo, onFullNameChange, onEmailChange }) {
  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        onFullNameChange={onFullNameChange}
        onEmailChange={onEmailChange}
      ></GeneralInfo>
    </>
  );
}

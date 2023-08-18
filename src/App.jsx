import { useImmer } from 'use-immer';
import './App.css';
import Form from './components/Form';
import GeneratedCV from './components/GeneratedCV';

function App() {
  const [generalInfo, setGeneralInfo] = useImmer({
    fullName: '',
    email: '',
    phone: '',
  });

  const [hideForm, setHideForm] = useImmer(false);

  function handleHideForm() {
    setHideForm(true);
  }

  function handleShowForm() {
    setHideForm(false);
  }

  function handleFullNameChange(e) {
    setGeneralInfo((draft) => {
      draft.fullName = e.target.value;
    });
  }

  function handleEmailChange(e) {
    setGeneralInfo((draft) => {
      draft.email = e.target.value;
    });
  }

  function handlePhoneChange(e) {
    setGeneralInfo((draft) => {
      draft.phone = e.target.value;
    });
  }

  if (hideForm) {
    return (
      <div>
        <GeneratedCV
          generalInfo={generalInfo}
          handleShowForm={handleShowForm}
        ></GeneratedCV>
      </div>
    );
  }

  return (
    <>
      <Form
        generalInfo={generalInfo}
        onFullNameChange={handleFullNameChange}
        onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange}
        handleHideForm={handleHideForm}
      ></Form>
    </>
  );
}

export default App;

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

  function handleGeneralInfoChange(e) {
    setGeneralInfo((draft) => {
      draft[e.target.name] = e.target.value;
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
        handleGeneralInfoChange={handleGeneralInfoChange}
        handleHideForm={handleHideForm}
      ></Form>
    </>
  );
}

export default App;

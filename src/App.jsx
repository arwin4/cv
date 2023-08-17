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

  return (
    <>
      <Form
        generalInfo={generalInfo}
        onFullNameChange={handleFullNameChange}
        onEmailChange={handleEmailChange}
      ></Form>
      <GeneratedCV generalInfo={generalInfo}></GeneratedCV>
    </>
  );
}

export default App;

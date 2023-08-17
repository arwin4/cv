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

  console.log(generalInfo.fullName);

  function handleFullNameChange(e) {
    setGeneralInfo((draft) => {
      draft.fullName = e.target.value;
    });
  }

  return (
    <>
      <Form
        fullName={generalInfo.fullName}
        onFullNameChange={handleFullNameChange}
      ></Form>
      <GeneratedCV></GeneratedCV>
    </>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import GeneratedCV from './components/GeneratedCV';

function App() {
  const [fullName, setFullName] = useState('test');
  console.log(fullName);

  return (
    <>
      <Form fullName={fullName} onFullNameChange={setFullName}></Form>
      <GeneratedCV></GeneratedCV>
    </>
  );
}

export default App;

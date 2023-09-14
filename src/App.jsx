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

  const [educationInfo, setEducationInfo] = useImmer({
    school: '',
    studyTitle: '',
    graduationYear: '',
  });

  const [jobInfo, setJobList] = useImmer([]);

  function addJob(e) {
    // Source: https://stackoverflow.com/a/66407161
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    formProps.id = self.crypto.randomUUID();

    setJobList((draft) => {
      draft.push(formProps);
    });
  }

  function deleteJob(id) {
    const updatedList = jobInfo.filter((job) => job.id !== id);
    setJobList(updatedList);
  }

  const [hideForm, setHideForm] = useImmer(false);

  function handleHideForm() {
    setHideForm(true);
  }

  function handleShowForm() {
    setHideForm(false);
  }

  if (hideForm) {
    return (
      <div>
        <GeneratedCV
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          handleShowForm={handleShowForm}
        ></GeneratedCV>
      </div>
    );
  }

  return (
    <>
      <Form
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
        educationInfo={educationInfo}
        setEducationInfo={setEducationInfo}
        jobInfo={jobInfo}
        addJob={addJob}
        setJobList={setJobList}
        deleteJob={deleteJob}
        handleHideForm={handleHideForm}
      ></Form>
    </>
  );
}

export default App;

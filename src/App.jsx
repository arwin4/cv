import { useImmer } from 'use-immer';
import './App.css';
import Form from './components/Form';
import GeneratedCV from './components/GeneratedCV';

function App() {
  const [generalInfo, setGeneralInfo] = useImmer({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '555-123-4567',
  });

  const [educationInfo, setEducationInfo] = useImmer({
    school: 'Example University',
    studyTitle: 'Computer Science',
    graduationYear: '2022',
  });

  const testJobInfo = [
    {
      company: 'Business Corp.',
      position: 'Advisor',
      responsibilities: 'Doing important things',
      employmentStartDate: '1996',
      employmentEndDate: '2023',
      id: 'onlyfortesting',
    },
  ];

  // const [generalInfo, setGeneralInfo] = useImmer({
  //   fullName: '',
  //   email: '',
  //   phone: '',
  // });

  // const [educationInfo, setEducationInfo] = useImmer({
  //   school: '',
  //   studyTitle: '',
  //   graduationYear: '',
  // });

  // const [jobInfo, setJobList] = useImmer([]);
  const [jobInfo, setJobList] = useImmer(testJobInfo);

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

  const [CVVisible, setCVVisibility] = useImmer(false);

  function showCV() {
    setCVVisibility(true);
  }

  function hideCV() {
    setCVVisibility(false);
  }

  if (CVVisible) {
    return (
      <div>
        <GeneratedCV
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          jobInfo={jobInfo}
          hideCV={hideCV}
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
        showCV={showCV}
      ></Form>
    </>
  );
}

export default App;

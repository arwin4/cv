import { useImmer } from 'use-immer';
import './App.css';
import Form from './components/Form';
import GeneratedCV from './components/GeneratedCV';
import { useCallback } from 'react';

function App() {
  const emptyInfo = {
    general: { fullName: '', email: '', phone: '' },
    education: { school: '', studyTitle: '', graduationYear: '' },
    job: [],
  };

  const [generalInfo, setGeneralInfo] = useImmer(emptyInfo.general);
  const [educationInfo, setEducationInfo] = useImmer(emptyInfo.education);
  const [jobInfo, setJobList] = useImmer(emptyInfo.job);

  // useCallback() is used here to allow insertDummyData to be called outside useEffect()
  const insertDummyData = useCallback(() => {
    setGeneralInfo({
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      phone: '555-123-4567',
    });

    setEducationInfo({
      school: 'Example University',
      studyTitle: 'Computer Science',
      graduationYear: '2022',
    });

    const dummyJobInfo = [
      {
        company: 'Business Corp.',
        position: 'Advisor',
        responsibilities: 'Doing important things',
        employmentStartDate: '1996',
        employmentEndDate: '2023',
        id: 'dummy-id',
      },
    ];

    setJobList(dummyJobInfo);
  }, [setEducationInfo, setGeneralInfo, setJobList]);

  const emptyAllInfo = useCallback(() => {
    setGeneralInfo(emptyInfo.general);
    setEducationInfo(emptyInfo.education);
    setJobList(emptyInfo.job);
  }, [
    emptyInfo.education,
    emptyInfo.general,
    emptyInfo.job,
    setEducationInfo,
    setGeneralInfo,
    setJobList,
  ]);

  function handleEmptyAllButton() {
    if (
      window.confirm(
        'Are you sure you want to reset the form? All your input will be lost.',
      )
    ) {
      emptyAllInfo();
    }
  }

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
      <h1>CV generator</h1>
      <h2>Generate a simple CV in minutes</h2>
      <button onClick={handleEmptyAllButton}>Reset form</button>
      <button onClick={insertDummyData}>
        I&apos;m too lazy to type. Just fill in some example information.
      </button>
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

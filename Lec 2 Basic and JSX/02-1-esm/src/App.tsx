import './App.css';
import reactLogo from './assets/react.svg';
import Info from './Info.tsx';

function CourseLogo() {
  return (
    <img src={reactLogo} className="logo react" alt="React logo" />
  )
}

function App() {
  const courseName = 'React Credit Program'
  return (
    <>
      <>
        <CourseLogo />
        <CourseLogo />
      </>
      <p>Course: {courseName}</p>
      <p>{courseName}</p>
      <p>{courseName}</p>
      <p>{courseName}</p>
      <Info />
    </>
  )
}

export default App
import './App.css'
import reactLogo from "./assets/react.svg"

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(
    'en-US',
    { weekday: 'long' }
  ).format(date);
}

function App() {
  const courseName = "React Program";
  const logoAlt = "React logo";
  const today = new Date();
  return (
    <>
      <h1>Welcome to {courseName}</h1>
      <img src={reactLogo} className="logo" alt={logoAlt} />
      <h3>Course for {formatDate(today)}</h3>
      <p style={{color: 'pink'}}>
        Reminder: Please Team up for the final project!
      </p>
    </>
  )
}

export default App

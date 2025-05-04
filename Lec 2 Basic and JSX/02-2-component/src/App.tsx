import './App.css'
import reactLogo from './assets/react.svg'
import Info from './Info.tsx'

function CourseLogo() {
  return (
    <img src={reactLogo} className="logo react" alt="React logo" />
  )
}

function App() {
  return (
    <>
      <div>
        <h2>2025 React Course</h2>
        <CourseLogo />
        <h1>App - CourseInfo</h1>
        <Info />
      </div>
      <div>
        <p>Another Div</p>
      </div>
    </>
  )
}

export default App
export { CourseLogo }
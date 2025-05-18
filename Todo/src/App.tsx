import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App
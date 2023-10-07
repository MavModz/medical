import Register from './pages/Register/Register';
import Error from './pages/Error/Error';
import Dashboard from './pages/Dashboard/Dashboard';
import Calendar from './Components/Calendar/Calendar';
import Sidebar from './Components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register />} />      
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/sidebar' element={<Sidebar />} />

        {/* Fallback Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

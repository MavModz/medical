import React from 'react';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Error from './pages/Error/Error';
import Reception from './pages/Reception/Reception';
import Billing from './pages/Billing/Billing';
import Transcription from './pages/Transcription/Transcription';
import PACS from './pages/PACS/PACS';
import Administration from './pages/Administration/Administration';
import Management from './pages/Management/Management';
import { Routes, Route } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import './App.css';

function App() {
  const authToken = sessionStorage.getItem('auth_token');

  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />

        {/* Protected Routes */}
        {authToken ? (
          <>
          <Route path='/ ' element={<Register />} />
            <Route path='/register' element={<Register />} />
            <Route path='/billing' element={<Billing />} />
            <Route path='/transcription' element={<Transcription />} />
            <Route path='/reception' element={<Reception />} />
            <Route path='/pacs' element={<PACS />} />
            <Route path='/administration' element={<Administration />} />
            <Route path='/management' element={<Management />} />
          </>
        ) : (
          <Route path="/" element={<Login />} />
        )}

        {/* Fallback Route */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

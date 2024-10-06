import './App.css';

import LoginPage from './pages/Login.js';
import HomePage from './pages/Home.js';
import RegisterPage from './pages/Register.js';

//config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { AuthProvider } from './components/Login/AuthContext.js';
import PrivateRoute from './components/Login/PrivateRoute.js';
import NavBar from './components/NavBar/NavBar.js';
import SideBar from './components/SideBar/SideBar.js';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <SideBar />
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/Home" element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
          <Route path="/About" element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
          <Route path="/Account" element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
          <Route path="/Register" element={<RegisterPage />}></Route>
        </Routes>
        </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;

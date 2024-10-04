import './App.css';

import LoginPage from './pages/Login.js';
import HomePage from './pages/Home.js';

//config react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import { AuthProvider } from './components/Login/AuthContext.js';
import PrivateRoute from './components/Login/PrivateRoute.js';

function App() {
  return (
    <div className="App">
    <AuthProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/Home" element={<PrivateRoute><HomePage /></PrivateRoute>}></Route>
          </Routes>
        </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;

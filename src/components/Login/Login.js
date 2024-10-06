import React, { useState } from "react";
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [isUserSelected, setIsUserSelected] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleUserClick = (typelogin) => {
    setIsUserSelected(typelogin);
    setErrorMessage("");
    // Aqui você pode fazer uma chamada ao backend (Node.js) se necessário
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Chamada à API para verificar se o usuário e senha estão corretos
      const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
      const data = await response.json();

      if (data.length > 0) {
        setErrorMessage("");
        login();
        navigate('/home');
        // Redirecionar ou continuar o fluxo da aplicação
      } else {
        setErrorMessage("Usuário ou senha incorretos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="login-container">
      <img className="logo-kn" src="/images/Logo-kn.png" alt="Logo" />
      <div className="login-box">
        {/* Exibir opções de login somente se nenhum usuário for selecionado */}
        {isUserSelected === null && (
          <div className="user-list">
            <div className="user-option" onClick={() => handleUserClick("User")}>
              Login with User
            </div>
            <p className="p-or">or</p>
            <div className="user-option" onClick={() => handleUserClick("SSO")}>
              Login with SSO
            </div>
          </div>
        )}

        {/* Exibir o formulário de login baseado na seleção do usuário */}
        {isUserSelected === "User" && (
          <div className="user-selected">
            <p className="p-or">Login with user account</p>
            <form className="user-selected" onSubmit={handleLoginSubmit}>
            <input className="user-selected" type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input className="user-selected" type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button className="user-selected" type="submit">Login</button>
            </form>
            <p  className="user-selected">Or <NavLink to="/Register">Register here</NavLink></p>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        )}
        
        {isUserSelected === "SSO" && (
          <div className="user-selected">
            <form className="user-selected">
              <input className="user-selected" type="text" placeholder="Email" required />
              <input className="user-selected" type="password" placeholder="Senha" required />
              <button className="user-selected" type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
      {(isUserSelected === "SSO" || isUserSelected === "User") && (
      <div className="user-selected back-button">
          <button className="back-button" onClick={() => handleUserClick(null)}>Voltar</button>
        </div>
      )}
      <div className="div-contactus">
        <p>Someting wrong? Please contact us: <a href="teste">bi.automacao@kuehne-nagel.com</a></p>
      </div>
    </div>
  );
};

export default Login;

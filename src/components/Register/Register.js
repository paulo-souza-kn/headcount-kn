import "./Register.css"; // CSS da animação

import { NavLink } from "react-router-dom";

const Register = () => {
    return (
      <div className="register-kn">
        {/* Logo */}
        <div>
          <img src="/images/Logo-kn.png" alt="Logo" />
        </div>

        {/* Caixa de registro */}
        <div className="registerbox">
          <form>
            <h1>Register</h1>
            <p>Nome do usuário:</p>
            <input type="text" placeholder="Username" />
            <p>Senha:</p>
            <input type="password" placeholder="Password" />
            <button type="submit">Send</button>
          </form>
        </div>
        <button><NavLink to="/">Voltar</NavLink></button>
      </div>
    );
};

export default Register;

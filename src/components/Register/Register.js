import "./Register.css"; // CSS da animação
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password
    };

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        alert("Usuário registrado com sucesso!");
        setUsername("");
        setPassword("");
      } else {
        alert("Erro ao registrar usuário.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao registrar usuário.");
    }
  };

  return (
    <div className="register-kn">
      {/* Logo */}
      <div>
        <img src="/images/Logo-kn.png" alt="Logo" />
      </div>

      {/* Caixa de registro */}
      <div className="registerbox">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <p>Nome do usuário:</p>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p>Senha:</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <button>
        <NavLink to="/">Voltar</NavLink>
      </button>
    </div>
  );
};

export default Register;

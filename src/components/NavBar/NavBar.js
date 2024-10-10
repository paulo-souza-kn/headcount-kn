import "./NavBar.css";

import {NavLink } from "react-router-dom";
import { TbUserFilled } from "react-icons/tb";
import { FaQuestionCircle } from "react-icons/fa";
import React, { useState } from 'react';
import { IoLogOutSharp } from "react-icons/io5";
import { useAuth } from '../Login/AuthContext';

const NavBar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleuserlogout = () => {
        setIsExpanded(!isExpanded); // Alterna entre aberto/fechado
    };

    const handleLogout = () => {
        setIsExpanded(false); // Fecha o dropdown
        logout(); // Executa a função de logout do contexto de autenticação
    };

    if (!isAuthenticated) {
        return null; // Não exibe a navbar se não estiver autenticado
      }

    return(
        <div>
            <nav className='navbar'>
                <img className="navbar-logo-kn" src="/images/kn_logo_standard_negative_rgb.png" alt="Logo" />
                <div className='navbar-div'>
                    <NavLink className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} to="/Home">Home</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} to="/About">About</NavLink>
                    <NavLink className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} to="/Account">Account</NavLink>
                </div>
                <div>
                    <button className='navbar-button' onClick={toggleuserlogout}>
                        <TbUserFilled color="#fff" size={30} />
                    </button>
                    <button className='navbar-button' onClick={logout}>
                        <FaQuestionCircle color="#fff" size={30} />
                </button>
                </div>
            </nav>
            <div className="product-name">
                <p>CL Management</p>
            </div>
            {isExpanded && (
                    <div className="dropdown-box">
                        <p>{user ? user.username : "Usuário"}</p>
                        <ul>
                            <button>Management</button>
                            <button onClick={handleLogout}>
                                <IoLogOutSharp size={30} />
                                Logout
                                </button>
                        </ul>
                    </div>
                )}
        </div>
    );
};
export default NavBar;
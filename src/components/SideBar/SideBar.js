import "./SideBar.css";

import React, { useState } from 'react';
import { useAuth } from '../Login/AuthContext';
import {NavLink } from "react-router-dom";

const SideBar = () => {

    const { isAuthenticated } = useAuth();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded); // Alterna entre aberto/fechado
      };

    if (!isAuthenticated) {
        return null; // Não exibe o sidebar se não estiver autenticado
      }

    return(
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <div>
                <nav>
                    <p>oi</p>
                    <p>oi</p>
                    <p>oi</p>
                    <p>oi</p>
                    {/*<NavLink className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"} to="/Home">Home</NavLink>*/}
                </nav>
            </div>
            <div>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {isExpanded ? 'Fechar' : 'Abrir'} Sidebar
                </button>
            </div>
        </div>
    );
};
export default SideBar;
import "./SideBar.css";
import React, { useState } from 'react';
import { useAuth } from '../Login/AuthContext';
import { NavLink } from "react-router-dom";

const SideBar = () => {
    const { isAuthenticated } = useAuth();
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded); // Alterna entre aberto/fechado
    };

    if (!isAuthenticated) {
        return null; // Não exibe o sidebar se não estiver autenticado
    }

    return (
        <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
            <div className="sidebar-content">
                <nav>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    A
                </button>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    B
                </button>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    C
                </button>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    D
                </button>
                    {/*<NavLink className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"} to="/Home">Home</NavLink>*/}
                </nav>
            </div>
            <div className="sidebar-footer">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {isExpanded ? '<' : '>'}
                </button>
            </div>
        </div>
    );
};

export default SideBar;

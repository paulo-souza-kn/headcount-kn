import "./SideBar.css";
import React, { useState } from 'react';
import { useAuth } from '../Login/AuthContext';
import { useNavigate } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight, AiFillHome, AiFillSetting } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";
import { FaUser } from "react-icons/fa";

const SideBar = () => {
    const { isAuthenticated } = useAuth();
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = () => {
        // Redireciona para a página "Headcount"
        navigate('/Headcount');
      };
    

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
                <button className={`toggle-btn ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded ? <AiFillHome color="#003369" size={30} /> : <AiFillHome color="#003369" size={30} />}
                    {isExpanded ? " Home" : ""}
                </button>
                <button className={`toggle-btn ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded ? <AiFillSetting color="#003369" size={30} /> : <AiFillSetting color="#003369" size={30} />}
                    {isExpanded ? " Report" : ""}
                </button>
                <button className={`toggle-btn ${isExpanded ? 'expanded' : ''}`} onClick={() => {handleNavigation();}}>
                    {isExpanded ? <LuPlus color="#003369" size={30}/> : <LuPlus color="#003369" size={30}/>}
                    {isExpanded ? " Headcount" : ""}
                </button>
                <button className={`toggle-btn ${isExpanded ? 'expanded' : ''}`}>
                    {isExpanded ? <FaUser color="#003369" size={30} /> : <FaUser color="#003369" size={30} />}
                    {isExpanded ? "Solicitations" : ""}
                </button>
                </nav>
            </div>
            <div className="sidebar-footer">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    {isExpanded ? <AiFillCaretLeft color="#003369" size={30} /> : <AiFillCaretRight color="#003369" size={30}/>}
                </button>
            </div>
        </div>
    );
};

export default SideBar;

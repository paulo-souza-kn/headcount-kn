import { useAuth } from '../Login/AuthContext';
import "./NavBar.css";

import {NavLink } from "react-router-dom";

const NavBar = () => {
    const { isAuthenticated, logout } = useAuth();

    if (!isAuthenticated) {
        return null; // Não exibe a navbar se não estiver autenticado
      }

    return(
        <nav className='navbar'>
            <img className="navbar-logo-kn" src="/images/kn_logo_standard_negative_rgb.png" alt="Logo" />
            <div className='navbar-div'>
                <NavLink className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} to="/Home">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} to="/About">About</NavLink>
                <NavLink className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"} to="/Account">Account</NavLink>
            </div>
            <button className='navbar-button' onClick={logout}>Logout</button>
        </nav>
    );
};
export default NavBar;
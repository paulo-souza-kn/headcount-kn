import "./ProductBar.css";

import { useAuth } from '../Login/AuthContext';

import {NavLink } from "react-router-dom";

const ProductBar = () => {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return null; // Não exibe o sidebar se não estiver autenticado
      }

    return(
        <nav className='productbar'>
            <a className="productbar-a">CL Human Resources Management</a>
            {/*<NavLink className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"} to="/Home">Home</NavLink>*/}
        </nav>
    );
};
export default ProductBar;
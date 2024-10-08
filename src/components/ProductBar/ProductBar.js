import "./ProductBar.css";

import { useAuth } from '../Login/AuthContext';

import {NavLink } from "react-router-dom";

const ProductBar = () => {

    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return null; // Não exibe o sidebar se não estiver autenticado
      }

    return(
        <div className="productbar">
            <nav className='productbar'>
                <a className="productbar-a">CL Human Resources Management</a>
                {/*<NavLink className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"} to="/Home">Home</NavLink>*/}
        </nav>
        </div>
    );
};
export default ProductBar;
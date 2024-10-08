import React from 'react';
import DynamicTable from "../components/Table/Table"; // Verifique se o caminho está correto
import ProductBar from '../components/ProductBar/ProductBar';
import { HiUserGroup } from "react-icons/hi";


const HeadcountPage = () => {
  return (
    <div>
        <div>
            <ProductBar />
        </div>
        <div className='home-dashboard-pagename'>
            <HiUserGroup  color="#0099da" size={50} style={{ marginLeft: '100px' }} />
            <p>Headcount</p>
        </div>
        <div style={{
        position: 'absolute',
        top: '600px',
        left: '52%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        maxWidth: '1150px',
        padding: '20px',
        }}>
            <DynamicTable jsonUrl="http://localhost:3000/headcount" />
        </div>
    </div>
  );
};

export default HeadcountPage;

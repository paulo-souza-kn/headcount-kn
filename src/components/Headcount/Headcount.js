import React from 'react';
import DynamicTable from "../Table/Table"; // Verifique se o caminho está correto
import { HiUserGroup } from "react-icons/hi";
import './Headcount';

const Headcount = () => {
  return (
    <div>
        <div>
            <div className='home-headcount'>
                <div className='home-headcount-pagename'>
                    <HiUserGroup color="#0099da" size={50} style={{ marginLeft: '100px' }} />
                    <p>Headcount</p>
                </div>
                <div className='headcount'>
                    <DynamicTable jsonUrl="http://localhost:3000/headcount" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Headcount;

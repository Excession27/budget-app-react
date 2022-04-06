import React, { useContext } from 'react';
import { Table } from '../Table/Table';
import './ListView.css';
import { DataContext } from '../../context/DataContext';

export const ListView = () => {
    const contextData = useContext(DataContext);


    return (
        <div className='list-view__div'>
            <Table name='Income' array={contextData.data.income} />
            <Table name='Expenses' array={contextData.data.expenses} />
            
        </div>
    )
}

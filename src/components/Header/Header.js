import React, {useContext} from 'react';
import Title from '../Title/Title';
import Display from '../Display/Display';
import {Total} from '../Total/Total';
import { DataContext } from '../../context/DataContext';

import './Header.css'

export const Header = (props) => {
  const contextData = useContext(DataContext);
  const totalIncome = contextData.data.getTotalIncome();
  const totalExpenses = contextData.data.getTotalExpenses();
  const saldo = totalIncome - totalExpenses;
  const perc = (totalExpenses / totalIncome * 100).toFixed(1) + "%";

  return (
    <div className='header__div'>
        <Title />
        <Total value={saldo} />
        <Display name={"Income"} sum={totalIncome} bgColor={"blue-bg"} />
        <Display name={"Expenses"} sum={totalExpenses} percentage={perc} bgColor={"orange-bg"} />
    </div>
  )
}

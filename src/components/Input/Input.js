import React, { useState, useContext } from 'react';
import './Input.css';
import { Transaction } from '../../classes/Transaction.ts';
import { TxType } from '../../classes/TxType.ts'
import { DataContext } from '../../context/DataContext';

export const Input = ()  => {

  const [ selected, setSelected ] = useState('income');
  const [ text, setText ] = useState('');
  const [ number, setNumber ] = useState(0);
  const contextData = useContext(DataContext);

  const submitTransaction = (e) => {
    e.preventDefault();
    let transactionType = TxType.income;

    

    if (selected === 'expense') {
      transactionType = TxType.expense
    }

    const newTx = new Transaction(text, number, transactionType);

    contextData.addTransaction(newTx);
    

    setSelected('income');
    setText('');
    setNumber(0);
  }

  return  (
    <form className='input__budget-controls' onSubmit={submitTransaction}>
      <select name='input__transaction-type' className='input__transaction-type' value={ selected } onChange={ (e) => setSelected(e.target.value) }>
        <option value='income' >+</option>
        <option value='expense' >-</option>
      </select>

      <input value={ text } onChange={ (event) => setText(event.target.value) } type='text' name='input__description' id='input__description' placeholder='Add description' autoComplete='on' maxLength={50} required />

      <input value={ number } onChange={ (event) => setNumber(Number(event.target.value)) } type='number' name='input__transaction-value' id='input__transaction-value' min='1' step='0.01' autoComplete='off' />

      <button type='submit' className={ `input__submit ${selected}` }>✔</button>
    </form>
  )
}

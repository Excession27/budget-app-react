import React, { useState, useContext } from 'react';
import { TxType } from '../../classes/TxType.ts';
import { Transaction } from '../../classes/Transaction.ts'
import './Table.css';
import { DataContext } from '../../context/DataContext';

export const Table = (props) => {
  const [ isVisible, setIsVisible ] = useState(false);
  const contextData = useContext(DataContext);
  const totalIncome = contextData.data.getTotalIncome();

  const removeItem = (tx) => {
    console.log("tx remove")
    console.log(tx);
    contextData.removeTransaction(tx);
  }

  return (
    <div className="table__items" >

      <h3>{ props.name }</h3>
      <ul>

        { props.array.map((item, index) => {
          if (item.type === TxType.income) {

            return (
              <li className={ `${item.type}` } key={ index } onMouseEnter={ () => setIsVisible(true) } onMouseLeave={ () => setIsVisible(false) }>
                <span className="description">{ item.desc }</span>

                <div className="table__income-value">
                  <span className="value">${ item.amount }</span>
                  { isVisible && (<button onClick={ () => removeItem(new Transaction(item.desc, item.amount, item.type)) }>X</button>) }
                </div>

              </li>
            );
          }

          return (
            <li className={ `${item.type}` } key={ index } onMouseEnter={ () => setIsVisible(true) } onMouseLeave={ () => setIsVisible(false) }>
              <span className="description">{ item.desc }</span>

              <div className="table__expense-value-perc">
                <span className="value">-${ item.amount }</span>

                <span className="perc">${ (item.amount / totalIncome * 100).toFixed(1) }%</span>
                { isVisible && (<button onClick={ () => removeItem(new Transaction(item.desc, item.amount, item.type)) }>X</button>) }
              </div>

            </li>


          );
        }) }

      </ul>
    </div>
  )
}

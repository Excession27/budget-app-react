import React, { createContext, useState } from 'react';
import { TxType } from '../classes/TxType.ts';
import _ from 'lodash';

export const DataContext = createContext();
let listOfExpenses = [];
let listOfIncomes = []

if (localStorage.getItem('expenses')) {
    listOfExpenses = JSON.parse(localStorage.getItem('expenses'));
};

if (localStorage.getItem('income')) {
    listOfIncomes = JSON.parse(localStorage.getItem('income'));
};


export default function DataContextProvider({ children }) {


    let [ data, setData ] = useState({
        income: listOfIncomes,
        getTotalIncome: () => {
            let total = 0;
            data.income.forEach((tx) => {
                total += tx.amount;
            })

            return total;
        },
        expenses: listOfExpenses,
        getTotalExpenses: () => {
            let total = 0;
            data.expenses.forEach((tx) => {
                total += tx.amount;
            })

            return total;
        }
    });

    const addTransaction = (tx) => {

        setData((transaction) => {
            if (tx.type === TxType.income) {
                transaction.income.push(tx);
            }
            if (tx.type === TxType.expense) {
                transaction.expenses.push(tx);
            }
            return ({ ...transaction })

        })

    }

    const removeTransaction = (tx) => {   
        setData((transaction) => {

            if (tx.type === TxType.income) {
                transaction.income.splice(transaction.income.findIndex((income) => 

                JSON.stringify(income) === JSON.stringify(tx)

                ), 1);
            }

            if (tx.type === TxType.expense) {
                transaction.income.splice(transaction.income.findIndex((income) => 
                // Used lodash because it is a better comparer of values, however I believe in this example JSON.stringify() is fine enough
                _.isEqual(income, tx)

             ), 1);
            }

            return ({ ...transaction })
        })
    }

    localStorage.setItem('expenses', JSON.stringify(data.expenses));
    localStorage.setItem('income', JSON.stringify(data.income));

    return (
        <DataContext.Provider value={ { data, addTransaction, removeTransaction } } >
            { children }
        </DataContext.Provider>
    )
}

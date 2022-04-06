import React from 'react';
import { Header } from './components/Header/Header';
import { ListView } from './components/ListView/ListView';
import { Input } from './components/Input/Input';
import DataContextProvider from './context/DataContext';

import './App.css';



function App() {


  return (
    <>
    <DataContextProvider>
      <Header />
      <Input />
      <ListView />

    </DataContextProvider>



    </>
  );
}

export default App;

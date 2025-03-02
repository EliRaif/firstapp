import logo from '../../logo.svg';
import './App.css';
import Button from '../no name/Button/Button';
import TextInput from '../no name/TextInput/TextInput';
import Forms from '../no name/Forms/Forms';
import UserCard from '../no name/UserCard/UserCard';
import ItemList from '../no name/ItemList/ItemList';
import Product from '../no name/Product/Product';
import grandson from '../Hierarchy of children/Grandson/Grandson';
import React, { useState, useEffect } from "react";
import Child from '../Hierarchy of children/Child/Child';
import Counter1 from '../Counter1/Counter1';
import Header from '../Revenue Management/Header/Header';
import TransactionForms from '../Revenue Management/TransactionForms/TransactionForms';
import TransactionList from '../Revenue Management/TransactionList/TransactionList';

function App() {

  const [income, setIncome] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    setBalance(income - expenditure);
  }, [income, expenditure]);


  return (
    <div >

      <Header income={income} expenditure={expenditure} balance={balance} />

      <TransactionForms income={income} setIncome={setIncome} expenditure={expenditure} setExpenditure={setExpenditure} />

    </div>
  );
}

export default App;
import { useState, useEffect } from 'react';
import './App.css';
import ComponentCards from './components/ComponentCards';
import ComponentReceipt from './components/ComponentReceipt';
import ComponentHeader from './components/ComponentHeader'; 
import { useBillGates } from './context/BillGatesContext';  

function App() {
  const data = useBillGates();

  useEffect(() => {
    console.log("balance:", data.balance);
    console.log("balanceTotal:", data.balanceTotal);
  }, [data.balance, data.balanceTotal]);

  return (
    <>
      <ComponentHeader />
      <ComponentCards />
      {data.balance !== data.balanceTotal && <ComponentReceipt />}
    </>
  );
}

export default App;

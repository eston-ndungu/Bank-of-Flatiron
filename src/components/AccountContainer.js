import React,{useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  //Initialize state to hold the list of transactions
  const [transactions, setTransactions] = useState([]);
  


// useEffect to fetch data 
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      
      });
  }, []); //Empty dependency array : Run the side effect every time our component renders
  
  


  return (
    <div>
      <Search />
      <AddTransactionForm  />
      <TransactionsList transactions={transactions} />
    </div>
  );
}

export default AccountContainer;

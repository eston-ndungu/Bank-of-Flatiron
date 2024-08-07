import React,{useState, useEffect} from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  //Initialize state to hold the list of transactions
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");



// useEffect to fetch data 
  useEffect(() => {
    fetch("http://localhost:8001/transactions")
      .then(response => response.json())
      .then(data => {
        setTransactions(data);
      
      });
  }, []); //Empty dependency array : Run the side effect every time our component renders
  
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <div>
      <Search onSearchChange={handleSearchChange} />
      <AddTransactionForm  />
      <TransactionsList transactions={filteredTransactions} />
    </div>
  );
}

export default AccountContainer;

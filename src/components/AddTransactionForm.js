
import React, {useState}from "react";

function AddTransactionForm() {
  const[date, setDate] = useState("")
  const[description, setDescription] = useState("")
  const[category, setCategory] = useState("")
  const[amount, setAmount] = useState("")
  const[formdata, setFormData] =useState([])

  function handleSubmit(event){
  event.preventDefault();
  const data = {
    date,
    description,
    category,
    amount,
  };

  //Post data to db.json
  fetch("http://localhost:8001/transactions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data)
  }) . then((res) => {
    if (res.ok) {
      setFormData(prevState => [...prevState, data]);
    }
  })
  .catch((error) => {
    console.error("Error adding transaction:", error);
  });
}
  
  
  
  


  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date"   value={date} onChange={(e) => setDate(e.target.value)} required/>
          <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
          <input type="text" name="category"value={category} onChange={(e) => setCategory(e.target.value)}placeholder="Category" required/>
          <input type="number" name="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" step="0.01" required />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}


export default AddTransactionForm;

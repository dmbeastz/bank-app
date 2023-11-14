import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    id: '',
    description: '',
    amount: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addTransaction(newTransaction);

    setNewTransaction({
      id: '',
      description: '',
      amount: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>ID:</label>
      <input
        type="text"
        name="id"
        value={newTransaction.id}
        onChange={handleInputChange}
      />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={newTransaction.description}
        onChange={handleInputChange}
      />

      <label>Amount:</label>
      <input
        type="number"
        name="amount"
        value={newTransaction.amount}
        onChange={handleInputChange}
      />

      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;

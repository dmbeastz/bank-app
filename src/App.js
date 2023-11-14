import TransactionTable from './components/TransactionsTable';
import TransactionForm from './components/TransactionForm';
import { useState, useEffect  } from 'react';

const API_URL = ' http://localhost:3000/transactions';
function App() {
  const [transactions, setTransactions ] = useState ([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then(response => response.json ()) 
      .then((data) => {
        setTransactions(data || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  const addTransaction = (newTransaction) => {

    setTransactions([...transactions, newTransaction]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <TransactionForm addTransaction={addTransaction} />
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;

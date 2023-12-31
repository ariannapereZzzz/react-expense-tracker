import React, {useState} from 'react'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './components/NewExpense/NewExpense.css';

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const [isAddExpenseDisplay, setIsAddExpenseDisplay] = useState(false);
  const toggleAddExpenseFormDisplay = () => {setIsAddExpenseDisplay(!isAddExpenseDisplay) }

  const addExpenseButtonOnly =  
  <div className="new-expense">
  <button onClick={toggleAddExpenseFormDisplay}>Add New Expense</button>
  </div>
  


  return (
    <div>
     {
     isAddExpenseDisplay ? 
     <NewExpense onAddExpense={addExpenseHandler} toggleAddExpenseFormDisplay={toggleAddExpenseFormDisplay}/> :  
      addExpenseButtonOnly
      }
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;

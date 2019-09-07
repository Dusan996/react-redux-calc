import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpenses from './components/Total';

function App() {

  return (
    <Provider store={store}>
      <>
        <h1>Budget calculator</h1>
        <div className="App">
          <ExpenseForm />
          <ExpenseList />
        </div>
        <TotalExpenses />
      </>
    </Provider>
  );
}

export default App;

import React, { useState } from "react"; // usestate is a function that returns two values
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4"; // generate unique id

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car", amount: 500 },
  { id: uuid(), charge: "insurance", amount: 400 }
];

function App() {
  //stata value
  //all expenses, add expense

  const [expenses, setExpenses] = useState(initialExpenses);
  //single expense
  const [charge, setCharge] = useState(""); // pass default value inside ''
  const [amount, setAmount] = useState(""); // pass default value inside ''
  //alert
  const [alert, setAlert] = useState({ show: false });
  //functionality
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text }); //alert shows only when true
    setTimeout(() => {
      setAlert({ show: false }); //hide alert 3 second later.
    }, 3000);
  };
  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(charge, amount);
    if (charge !== "" && amount > 0) {
      const singleExpense = { id: uuid(), charge, amount };
      setExpenses([...expenses, singleExpense]); //spread operator to keep values in array
      handleAlert({ type: "success", text: "Your item is successfully added" });
      setCharge(""); // reset value empty after user submits value
      setAmount(""); // reset value empty after user submits value
    } else {
      handleAlert({ type: "danger", text: "Please fill out all blinks" });
    }
  };

  return (
    <React.Fragment>
      {alert.show && <Alert type={alert.type} text={alert.text}></Alert>}
      <h1>Hyoje travel calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        ></ExpenseForm>
        <ExpenseList expenses={expenses}></ExpenseList>
      </main>
      <h1>
        total :{" "}
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            /* acc= accumulator,  using parseint because external value from user is recognized as string*/

            return (acc = acc + parseInt(curr.amount));
          }, 0)}
        </span>
      </h1>
    </React.Fragment>
  );
}

export default App;

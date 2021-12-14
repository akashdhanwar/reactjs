import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import AddNewExpense from "./components/AddExpense/AddNewExpense/AddNewExpense";

const App = () => {
  const expenses = [
    {
      date: new Date(2020, 9, 2),
      title: "Toilet Paper",
      amount: 94.12,
      id: "e1",
    },
    {
      date: new Date(2021, 4, 18),
      title: "New TV",
      amount: 799.49,
      id: "e2",
    },
    {
      date: new Date(2020, 5, 23),
      title: "Car Insurance",
      amount: 294.67,
      id: "e3",
    },
    {
      date: new Date(2021, 2, 28),
      title: "New Desk",
      amount: 450,
      id: "e4",
    },
  ];
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <AddNewExpense />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;

import React from "react";
import ExpenseItem from "./ExpenseItem";
import { MdDelete } from "react-icons/md";
const ExpenseList = ({ expenses, handleEdit, handleDelete, clearList }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            ></ExpenseItem>
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearList}>
          clear list
          <MdDelete className="btn-icon"></MdDelete>
        </button>
      )}
    </>
  );
};

export default ExpenseList;

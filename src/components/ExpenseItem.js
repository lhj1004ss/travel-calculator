import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  const { id, charge, amount } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>{" "}
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(id)}
        >
          <MdEdit></MdEdit>
        </button>
      </div>
      <div>
        <button
          className="clear-btn"
          aria-label="clear button"
          onClick={() => handleDelete(id)}
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
/* aria label is nothing to write inside button */

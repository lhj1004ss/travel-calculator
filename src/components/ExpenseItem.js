import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense }) => {
  const { id, charge, amount } = expense;

  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="amount">${amount}</span>
      </div>{" "}
      <div className="edit-btn" aria-label="edit button">
        <MdEdit></MdEdit>
      </div>
      <div className="clear-btn" aria-label="clear button">
        <MdDelete></MdDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
/* aria label is nothing to write inside button */

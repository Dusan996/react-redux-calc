import React from 'react';
import { MdDelete } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions/expenseAction';

const ExpenseItem = ({ expense, editExpense, deleteExpense }) => {

    const { id, charge, amount } = expense;
    return (
        <li className="item">
            <div className="info">
                <span className="expense">{charge}</span>
                <span className="amount">${amount}</span>
            </div>
            <div>
                <button onClick={() => deleteExpense(id)} className="clear-btn" aria-label="delete button">
                    <MdDelete />
                </button>
            </div>
        </li>
    )

}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ deleteExpense }, dispatch)
}

export default connect(null, mapDispatchToProps)(ExpenseItem);

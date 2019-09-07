import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createExpense } from '../actions/expenseAction';
import uuid from 'uuid/v4';

function ExpenseForm(props) {
    const { edit } = props
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [alert, setAlert] = useState('');

    const handleCharge = e => {
        setCharge(e.target.value);
    }
    const handleAmount = e => {
        setAmount(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const expense = {
            id: uuid(),
            charge,
            amount
        }
        if (charge !== '' && amount !== '') {
            props.createExpense(expense)
        } else {
            console.log('ne moze')
            setAlert('Charge and Amount cannot be empty')
            setTimeout(() => {
                setAlert('')
            }, 2000)
        }
        setCharge('');
        setAmount('');
    }


    return (
        <>
            {alert && <h1 style={{ color: 'red' }}>{alert}</h1>}
            <form onSubmit={handleSubmit}>
                <div className="form-center">
                    <div className="form-group">
                        <label htmlFor="charge">charge</label>
                        <input type="text" className="form-control" id="charge" name="charge" placeholder="enter your charge" value={charge} onChange={handleCharge} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" className="form-control" id="amount" name="amount" placeholder="enter the charge cost" value={amount} onChange={handleAmount} />
                    </div>
                </div>
                <button type="submit" className="btn">
                    {edit ? 'Edit' : 'Submit'} <MdSend className="btn-icon" />
                </button>
            </form>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ createExpense }, dispatch);
}

export default connect(null, mapDispatchToProps)(ExpenseForm);

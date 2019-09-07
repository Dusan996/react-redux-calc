import uuid from 'uuid/v4';

let initialState = [
    { id: uuid(), charge: "rent", amount: 1600 },
    { id: uuid(), charge: "car payment", amount: 600 },
    { id: uuid(), charge: "credit card bill", amount: 1200 }
]

const deleteExpense = id => {
    let tempExpenses = initialState.filter(item => item.id !== id);

    return initialState = tempExpenses;
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'CREATE_EXPENSE':
            return ([...state, action.payload]);
        case 'DELETE_EXPENSES':
            return (state = []);
        case 'DELETE_EXPENSE':
            return deleteExpense(action.payload)
        default: return state;
    }
}
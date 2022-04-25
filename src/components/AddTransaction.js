import React, { useState, useContext } from 'react';
import ErrorModal from './ErrorModal';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');

  const [amount, setAmount] = useState(0);

  const [error, setError] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const addTransactionHandler = (event) => {
    event.preventDefault();
    if (text.trim().length === 0 || amount.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid text and amount (non-empty value).',
      });
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setText('');
    setAmount('');
  };

  const setTextHandler = (event) => {
    setText(event.target.value);
  };

  const setAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <h3>Add new transaction</h3>
      <form onSubmit={addTransactionHandler}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            text={text}
            onChange={setTextHandler}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            text={amount}
            onChange={setAmountHandler}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};

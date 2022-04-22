import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  const setTextHandler = (event) => {
    setText(event.target.value);
  };

  const setAmountHandler = (event) => {
    setAmount(event.target.value);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
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

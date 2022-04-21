import React, { useState } from 'react';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const setTextHandler = (event) => {
    event.preventDefault();
    setText(event.target.value);
    setText('');
  };

  const setAmountHandler = (event) => {
    event.preventDefault();
    setAmount(event.target.value);
    setAmount('');
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
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

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const deleteHandler = () => deleteTransaction(transaction.id);

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li
      className={transaction.amount < 0 ? 'minus' : 'plus'}
      key={transaction.id}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={deleteHandler} className='delete-btn'>
        x
      </button>
    </li>
  );
};

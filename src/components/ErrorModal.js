import React from 'react';
import Card from './Card';

export default function ErrorModal(props) {
  return (
    <div>
      <div className='backdrop' onClick={props.onConfirm} />
      <Card>
        <div className='modal'>
          <header className='header'>
            <h2>{props.title}</h2>
          </header>
          <div className='content'>
            <p>{props.message}</p>
          </div>
          <footer className='actions'>
            <button className='btn' onClick={props.onConfirm}>
              Got it!
            </button>
          </footer>
        </div>
      </Card>
    </div>
  );
}

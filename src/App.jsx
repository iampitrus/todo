import React, { useState } from 'react';
import { Header, Note } from './components';
// import { Counter } from './features/counter/Counter';

function App() {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className='App'>
      <Header />
      <div className='notes_container'>
        {showInput && (
          <div className='textField'>
            <input type='text' placeholder='Start writing Task' />
            <img src='./circle-plus-solid.svg' alt='add' />
          </div>
        )}
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
      <button onClick={() => setShowInput(!showInput)}>
        {showInput ? 'Done' : 'New List'}
      </button>
    </div>
  );
}

export default App;

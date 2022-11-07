import { useState } from 'react';

function Notes({ text }) {
  const [done, setDone] = useState(false);
  return (
    <div className='notes'>
      <div style={{ cursor: 'pointer' }} onClick={() => setDone(!done)}>
        <p
          style={
            done
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {text}
        </p>
      </div>
      <div className='icons'>
        <img style={{ marginRight: '1rem' }} src='./update.svg' alt='update' />
        <img src='./delete.svg' alt='delete' />
      </div>
    </div>
  );
}

export default Notes;

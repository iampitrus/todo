import { useState } from 'react';

import Add from '../../features/Add';
function TextField() {
  const [text, setText] = useState(null);
  return (
    <div className='textField'>
      <input
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Start writing Task'
      />
      <Add text={text} />
      <h1>maserati</h1>
    </div>
  );
}

export default TextField;

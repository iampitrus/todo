import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducer';

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (obj) => dispatch(addTodo(obj)),
//   };
// };

function TextField() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const add = () => {
    // Ensure we have sth in the text field
    if (text === '') {
      alert('Input must not be empty');
    } else {
      // Add to store
      dispatch(
        addTodo({
          id: Math.floor(Math.random() * 100),
          item: text,
        })
      );
      setText('');
    }
  };

  return (
    <div className='textField'>
      <input
        onChange={(e) => setText(e.target.value)}
        type='text'
        placeholder='Start writing Task'
        value={text}
      />
      <img onClick={() => add()} src='./add.svg' alt='add' />
    </div>
  );
}

export default TextField;

import { useDispatch } from 'react-redux';
import { addNote } from './todoSlice';

function Add({ text }) {
  const dispatch = useDispatch();

  return (
    <img
      onClick={() => dispatch(addNote(text))}
      src='./circle-plus-solid.svg'
      alt='add'
    />
  );
}

export default Add;

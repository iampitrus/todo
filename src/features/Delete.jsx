import { useDispatch } from 'react-redux';
import { deleteNote } from './todoSlice';

function Delete({ id }) {
  const dispatch = useDispatch();

  return (
    <img
      onClick={() => dispatch(deleteNote(id))}
      src='./trash-solid.svg'
      alt='delete'
    />
  );
}

export default Delete;

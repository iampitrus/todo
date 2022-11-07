import { useDispatch } from 'react-redux';
import { upDate } from './todoSlice';

function Update() {
  const dispatch = useDispatch();
  return (
    <img
      onClick={() => dispatch(upDate())}
      style={{ marginRight: '1rem' }}
      src='./update-note.svg'
      alt='update'
    />
  );
}

export default Update;

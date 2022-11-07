function Notes() {
  return (
    <div className='notes'>
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='icons'>
        <img
          style={{ marginRight: '1rem' }}
          src='./update-note.svg'
          alt='update'
        />
        <img src='./trash-solid.svg' alt='delete' />
      </div>
    </div>
  );
}

export default Notes;

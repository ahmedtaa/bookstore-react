import React from 'react';

const Form = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addBook, title, auther } = props;
  return (
    <form className="book-container">
      <input type="text" placeholder="title" ref={title} />
      <input type="text" placeholder="auther" ref={auther} />
      <button type="submit" onClick={addBook}>
        submit
      </button>
    </form>
  );
};

export default Form;

import React from 'react';

const Form = (props) => {
  // eslint-disable-next-line react/prop-types
  const { addBook, title, category } = props;
  return (
    <form className="book-container">
      <input type="text" placeholder="title" ref={title} />
      <input type="text" placeholder="auther" ref={category} />
      <button type="submit" onClick={addBook}>
        submit
      </button>
    </form>
  );
};

export default Form;

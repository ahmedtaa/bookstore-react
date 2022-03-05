// Actions Types

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// Actions
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchData = () => (dispatch) => fetch(
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hU7hRqGMmMkUTHelAE4I/books',
)
  .then((response) => response.json())
  .then((data) => {
    Object.keys(data).forEach((book) => {
      dispatch({
        type: ADD_BOOK,
        payload: {
          item_id: book,
          ...data[book][0],
        },
      });
    });
  });

// Reducer
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);

    default:
      return state;
  }
};

export default reducer;

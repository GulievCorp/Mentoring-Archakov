import { createStore } from 'redux';

const initialState = {
  items: [
    {
      id: '1',
      postName: 'Post 1',
      txt: 'Hello my name is Anar',
      img: 'https://realkz.com/admin/upload/images/39032.JPG',
    },
    {
      id: '2',
      postName: 'Post 2',
      txt: 'Выучил редакс',
      img: 'https://realkz.com/admin/upload/images/39032.JPG',
    },
    {
      id: '3',
      postName: 'Post 3',
      txt: 'У меня все хорошо',
      img: 'https://realkz.com/admin/upload/images/39032.JPG',
    },
  ],
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'DELETE_POST':
      return {
        ...state,
        items: state.items.filter((obj) => obj.id !== action.payload.id),
      };
    default:
      return state;
  }
};
const store = createStore(myReducer);

export default store;

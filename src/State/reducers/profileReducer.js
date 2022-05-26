import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
};

 const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'updateUsername':
      return { ...state, username: action.playload };
    case 'updatePassword':
      return { ...state, password: action.playload };
    default:
      return state;
  }
};

// const todosReducer = createReducer(state= initialState, (builder) => {
//   builder
//     .addCase('updateUsername', (state, action) => {
//       // "mutate" the array by calling push()
//       state = {...state , ...action.playload}
//     })
//     .addCase('updatePassword', (state, action) => {
//       const todo = state[action.payload.index]
//       // "mutate" the object by overwriting a field
//       todo.completed = !todo.completed
//     })
//     .addCase('REMOVE_TODO', (state, action) => {
//       // Can still return an immutably-updated value if we want to
//       return state.filter((todo, i) => i !== action.payload.index)
//     })
// })

export default profileReducer;
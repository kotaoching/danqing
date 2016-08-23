import { handleActions } from 'redux-actions';

const initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

export default handleActions({
  'add question' (state, action) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.payload
    }, ...state];
  }
}, initialState);

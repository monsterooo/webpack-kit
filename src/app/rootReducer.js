import { combineReducers } from 'redux';

// reddit
import { selectedReddit, postsByReddit } from '../reddit/redditReducer';

function counter(state = 0, action) {
  switch(action.type) {
    // 增加
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  counter,
  selectedReddit,
  postsByReddit
});

export default rootReducer;

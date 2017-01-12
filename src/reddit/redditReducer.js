import {
  SELECT_REDDIT,
  RECEIVE_POSTS,
  REQUEST_POSTS
} from './RedditActions';

export function selectedReddit(state = 'reactjs', action) {
  switch(action.type) {
    case SELECT_REDDIT:
      return action.reddit;
    default:
      return state;
  }
}


// 重新覆盖状态函数
function posts(state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type) {
    // 覆盖请求状态
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true
      }
    // 覆盖请求状态和请求数据
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state;
  }
}

/**
处理的请求
REQUEST_POSTS => 开始请求某个reddit
RECEIVE_POSTS
*/
export function postsByReddit(state = {}, action) {
  switch (action.type) {
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return {
        ...state,
        [action.reddit]: posts(state[action.reddit], action)
      };
    default:
      return state;
  }
}

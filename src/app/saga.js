import { delay } from 'redux-saga';
import fetch from 'isomorphic-fetch';
import { put, call, take, fork, select, takeEvery } from 'redux-saga/effects';
import * as actions from '../reddit/RedditActions';

// 拉取post数据
export function* fetchPosts(reddit) {
  yield put(actions.requestPosts(reddit));    // 发起dispatch请求，带上reddit名称
  const posts = yield call(fetchPostsApi, reddit);  // 给middlewarea一个effects调用
  yield put(actions.receivePosts(reddit, posts));
}

// 获取reddit数据 返回promise
export function fetchPostsApi(reddit) {
  return fetch(`http://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json() )
    .then(json => json.data.children.map(child => child.data))
}

export function* nextRedditChange() {
  while(true) {
    // 获取选中的select数据
    const prevReddit = yield select(selectedRedditSelector);
    // 等待SELECT_REDDIT的actions被发起，后再次执行take下面的代码
    yield take(actions.SELECT_REDDIT);
    // 拿到新的select数据
    const newReddit = yield select(selectedRedditSelector);
    // 获取以前从服务器拉取的数据
    const postsByReddit = yield select(postsByRedditSelector);
    // 如果这次和上次选中的select不一致并且本地没有缓存当然选择的类别，则从服务器请求数据
    if(prevReddit !== newReddit && !postsByReddit[newReddit]) {
      yield fork(fetchPosts, newReddit);
    }
  }
}

// reddit saga 启动执行检查
export function* startup() {
  const selectedReddit = yield select(selectedRedditSelector);
  yield fork(fetchPosts, selectedReddit);
}

// saga root generator
export default function* root(a) {
  yield fork(startup);
  yield fork(nextRedditChange);
}

// 快捷函数
const selectedRedditSelector = state => state.selectedReddit; //获取state当然选中的类别
const postsByRedditSelector = state => state.postsByReddit;


// 第一版saga文件
// export function* helloSaga() {
//   console.log('Hello Sagas!')
// }
//
// // Our worker Saga: will perform the async increment task
// export function* incrementAsync() {
//   yield delay(1000)
//   yield put({ type: 'INCREMENT' })
// }
// export function* decrement() {
//   yield put({type: 'DECREMENT'});
// }
//
// function fetchUser() {
//
// }
//
// //DECREMENT
//
// // Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
// export function* watchIncrementAsync() {
//   yield takeEvery('INCREMENT_ASYNC', incrementAsync)
// }
// export function* watchDecrementAsync() {
//   yield takeEvery('DECREMENT_ASYNC', decrement);
// }
//
// export default function* rootSaga() {
//   yield [
//     helloSaga(),
//     watchIncrementAsync(),
//     watchDecrementAsync()
//   ]
// }

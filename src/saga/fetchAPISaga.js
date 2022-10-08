import { fetchAPI, fetchAPISuccess, fetchAPIFailure } from "../action";
import { call, takeLatest, put,take } from 'redux-saga/effects'
import axios from "axios";
import { FETCH_API,POST_LINK } from "../ActionType";


function getPost(api) {
    return axios.get(api);
}
function* fetchPost(api) {
    console.log(api)
  try {
    const data = yield call(getPost(api));
    yield put(fetchAPISuccess(data));
  } catch (e) {
    yield put(fetchAPIFailure(e.message));
  }
}
function* fetchAPISaga() {
    // const url = yield take(POST_LINK)
    // console.log(url.payload)
  yield takeLatest(FETCH_API, fetchPost(""))
}
export default fetchAPISaga;
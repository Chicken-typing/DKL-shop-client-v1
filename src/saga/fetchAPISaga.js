import { fetchAPISuccess, fetchAPIFailure } from "../action";
import { call, takeLatest, put } from 'redux-saga/effects'
import axios from "axios";
import { FETCH_API } from "../ActionType";



function* fetchPost(action) {
  try {
    const res = (yield call (axios.get,action.params.url)).data
    console.log(res)
    yield put(fetchAPISuccess(res));
  } catch (e) {
    yield put(fetchAPIFailure(e.message));
  }
}
function* fetchAPISaga() {
    // const url = yield take(POST_LINK)
    // console.log(url.payload)
  yield takeLatest(FETCH_API, fetchPost)
}
export default fetchAPISaga;
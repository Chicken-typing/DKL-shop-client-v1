import { call, takeEvery, put } from "redux-saga/effects";
import { fetchUserSuccess, fetchAPIFailure } from "../action";
import { FETCH_USER } from "../ActionType";
import axios from "axios";
function* fetchPost(action) {
  try {
    const res = yield call(axios.get, action.params.url);
    yield put(fetchUserSuccess(res.data));
  } catch (e) {
    yield put(fetchAPIFailure(e.message));
  }
}
function* fetchUserSaga() {
  yield takeEvery(FETCH_USER, fetchPost);
}

export default fetchUserSaga;

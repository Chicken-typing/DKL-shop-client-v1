import { fetchStaticSuccess, fetchAPIFailure } from "../action";
import { call, takeLatest, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { FETCH_API_STATIC } from "../ActionType";
const user = JSON.parse(localStorage.getItem("userInfor"));
const header = {
  authorization: `Bearer ${user.token}`,
};
function* fetchPost(action) {
  try {
    const res = (yield call(axios.get, action.params.url, { headers: header }))
      .data;
    yield put(fetchStaticSuccess(res));
  } catch (e) {
    yield put(fetchAPIFailure(e.message));
  }
}
function* fetchStaticSaga() {
  yield takeEvery(FETCH_API_STATIC, fetchPost);
}
export default fetchStaticSaga;

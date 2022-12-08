import { FETCH_API_ORDER } from "../ActionType";
import { fetchOrdersSuccess, fetchAPIFailure } from "../action";
import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { API_ORDER } from "../linkTo";
function* fetchPost() {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const header = {
    Authorization: `Bearer ${user.token}`,
  };
  try {
    const res = (yield call(axios.get, API_ORDER, { headers: header })).data;
    yield put(fetchOrdersSuccess(res));
  } catch (e) {
    yield put(fetchAPIFailure(e.message));
  }
}
function* fetchOrderSaga() {
  yield takeLatest(FETCH_API_ORDER, fetchPost);
}
export default fetchOrderSaga;

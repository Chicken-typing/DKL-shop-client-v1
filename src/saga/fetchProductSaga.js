import { fetchProductSuccess, fetchAPIFailure } from "../action";
import { call, takeLatest, put } from "redux-saga/effects";
import axios from "axios";
import { FETCH_API_PRODUCT } from "../ActionType";
import { API_PRODUCT } from "../linkTo";

function* fetchPost() {
  try {
    const res = (yield call(axios.get, API_PRODUCT)).data;
    yield put(fetchProductSuccess(res));
  } catch (e) {
    yield put(fetchAPIFailure(e.message));
  }
}
function* fetchProductSaga() {
  yield takeLatest(FETCH_API_PRODUCT, fetchPost);
}
export default fetchProductSaga;

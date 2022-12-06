import {
  fetchStatic,
  fetchRevenueSuccess,
  fetchNeededSuccess,
  fetchAccessionSuccess,
  fetchAPIFailure,
} from "../action";
import { call, takeLatest, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  API_ADMIN_REVENUE,
  API_ADMIN_ACCESS,
  API_ADMIN_NEEDED,
} from "../linkTo";
import { FETCH_API_STATIC } from "../ActionType";

function* fetchPost(action) {
  try {
    const res = (yield call(axios.get, action.params.url)).data;
    switch (action.params.url) {
      case API_ADMIN_ACCESS:
        yield put(fetchAccessionSuccess(res));
        break;
      case API_ADMIN_NEEDED:
        yield put(fetchNeededSuccess(res));
        break;
      case API_ADMIN_REVENUE:
        yield put(fetchRevenueSuccess(res));
        break;
      default:
        yield put(fetchAPIFailure("The api do not exist."));
        break;
    }
  } catch (e) {
    yield put(fetchAPIFailure(e.message));
  }
}
function* fetchStaticSaga() {
  yield takeEvery(FETCH_API_STATIC, fetchPost);
}
export default fetchStaticSaga;

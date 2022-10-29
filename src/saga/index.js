import { all } from "redux-saga/effects";
import fetchAPISaga from "./fetchAPISaga";
import fetchOrderSaga from "./fetchOrderSaga";
import fetchProductSaga from "./fetchProductSaga";
import fetchStaticSaga from "./fetchStaticSaga";
export default function* rootSaga() {
  yield all([
    fetchAPISaga(),
    fetchProductSaga(),
    fetchStaticSaga(),
    fetchOrderSaga(),
  ]);
}
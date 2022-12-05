import { all } from "redux-saga/effects";
import fetchAPISaga from "./fetchAPISaga";
import fetchOrderSaga from "./fetchOrderSaga";
import fetchProductSaga from "./fetchProductSaga";
import fetchStaticSaga from "./fetchStaticSaga";
import fetchAdvertiseSaga from './fetchAdvertiseSaga'

export default function* rootSaga() {
    yield all([
        fetchAPISaga(),
        fetchProductSaga(),
        fetchStaticSaga(),
        fetchOrderSaga(),
        fetchAdvertiseSaga(),
    ]);
}
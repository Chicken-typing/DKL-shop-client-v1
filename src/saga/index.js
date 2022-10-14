import { all } from 'redux-saga/effects'
import fetchAPISaga from './fetchAPISaga'
import fetchProductSaga from './fetchProductSaga'
export default function* rootSaga(){
    yield all([
        fetchAPISaga(),
        fetchProductSaga(),
    ])
}

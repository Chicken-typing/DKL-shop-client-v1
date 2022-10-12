import { all } from 'redux-saga/effects'
import fetchAPISaga from './fetchAPISaga'
export default function* rootSaga(){
    yield all([
        fetchAPISaga(),
    ])
}

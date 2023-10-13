import { all, fork } from 'redux-saga/effects';
import { saga as authSaga } from './auth'

const forkEffect = [
    fork(authSaga.default)
];

export default function* rootSaga() {
    yield all(forkEffect);
}

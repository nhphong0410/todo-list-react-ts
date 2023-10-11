import { all, fork } from 'redux-saga/effects';
import { saga as counterSaga } from './counter';
import { saga as authSaga } from './auth'

const forkEffect = [
    fork(counterSaga.default),
    fork(authSaga.default)
];

export default function* rootSaga() {
    yield all(forkEffect);
}

import { all, fork } from "redux-saga/effects";
import { saga as counterSaga } from "./counter";

const forkEffect = [
    fork(counterSaga.default)
];

export default function* rootSaga() {
    yield all(forkEffect);
}

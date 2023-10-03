import { put, takeEvery, delay } from "redux-saga/effects";
import { actions, ActionTypes } from './action'

export function* increaseAsyncStart() {
    try {
        yield delay(1000)

        const number = Math.floor(Math.random() * 10)

        if (!number) {
            throw new Error
        }

        yield put(actions.counterIncreaseAsyncSuccess({ amount: number }))
    } catch (error) {
        yield put(actions.counterIncreaseAsyncError())
    }
}

export default function* counterSaga() {
    yield takeEvery(ActionTypes.INCREASE_ASYNC_START, increaseAsyncStart);
}

import { put, takeEvery, delay } from "redux-saga/effects";
import { Action, actions, ActionTypes } from './action'

export function* authSignInStart(action: Action) {
    try {
        console.log(action)

        yield delay(1000)

        const number = Math.floor(Math.random() * 10)

        if (!number) {
            throw new Error
        }


        yield put(actions.authSignInSuccess())
    } catch (error) {
        yield put(actions.authSignInError())
    } finally {
        yield put(actions.authSignInFinish())
    }
}

export default function* counterSaga() {
    yield takeEvery(ActionTypes.SIGN_IN_START, authSignInStart);
}

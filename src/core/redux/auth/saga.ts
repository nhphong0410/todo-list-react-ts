import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import { Action, actions, ActionTypes } from './action'
import { createEmailSession, getCurrentSession, signOut, GetCurrentSession } from "core/services/auth";

export function* authSignInStart(action: Action) {
    try {
        yield call(createEmailSession, action.payload.email, action.payload.password)

        yield put(actions.authSignInSuccess())

        return
    } catch (error) {
        yield put(actions.authSignInError())
    } finally {
        yield put(actions.authSignInFinish())
    }
}

export function* authSignInSuccess() {
    try {
        const currentSession: GetCurrentSession = yield call(getCurrentSession)
        console.log(currentSession)

        return
    } catch (error) {
        console.log(error)
    }
}

export function* authSignInFinish() {
    try {
        yield call(signOut)

        return
    } catch (error) {
        console.log(error)
    }
}

export default function* authSaga() {
    yield takeLatest(ActionTypes.SIGN_IN_START, authSignInStart);
    yield takeEvery(ActionTypes.SIGN_IN_FINISH, authSignInFinish);
    yield takeEvery(ActionTypes.SIGN_IN_SUCCESS, authSignInSuccess)
}

import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import { Action, actions, ActionTypes } from './action'
import { createEmailSession, getCurrentSession, getJWTToken, signOut } from "core/services/auth";
import { type CurrentSession, type JWT } from "core/appwrite";

export function* authSignInStart(action: Action) {
    try {
        yield call(createEmailSession, { email: action.payload.email, password: action.payload.password })

        yield put(actions.authSignInSuccess())

        return
    } catch (error) {
        yield put(actions.authSignInError())
    }
}

export function* authSignInSuccess() {
    try {
        const currentSession: CurrentSession = yield call(getCurrentSession)
        console.log(currentSession)

        const jwt: JWT = yield call(getJWTToken)
        console.log(jwt)

        yield put(actions.authSignInFinish())

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

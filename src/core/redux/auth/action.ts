export const ActionTypes = {
    SIGN_IN_START: 'AUTH/SIGN_IN_START',
    SIGN_IN_SUCCESS: 'AUTH/SIGN_IN_SUCCESS',
    SIGN_IN_ERROR: 'AUTH/SIGN_IN_ERROR',
    SIGN_IN_FINISH: 'AUTH/SIGN_IN_FINISH',
    SIGN_IN_CANCEL: 'AUTH/SIGN_IN_CANCEL',
    SIGN_OUT: 'AUTH/SIGN_OUT'
}

// payload types
type AuthSignInStartPayload = {
    email: string,
    password: string
}

// actions
const authSignInStart = (payload: AuthSignInStartPayload) => ({
    type: ActionTypes.SIGN_IN_START,
    payload
});
const authSignInSuccess = () => ({
    type: ActionTypes.SIGN_IN_SUCCESS
});
const authSignInError = () => ({
    type: ActionTypes.SIGN_IN_ERROR
});
const authSignInFinish = () => ({
    type: ActionTypes.SIGN_IN_FINISH
})
const authSignInCancel = () => ({
    type: ActionTypes.SIGN_IN_CANCEL
})
const authSignOut = () => ({
    type: ActionTypes.SIGN_OUT
})

export const actions = {
    authSignInStart,
    authSignInSuccess,
    authSignInError,
    authSignInFinish,
    authSignInCancel,
    authSignOut
}

// action types
type AuthSignInStart = ReturnType<typeof authSignInStart>
type AuthSignInSuccess = ReturnType<typeof authSignInSuccess>
type AuthSignInError = ReturnType<typeof authSignInError>
type AuthSignInFinish = ReturnType<typeof authSignInFinish>
type AuthSignInCancel = ReturnType<typeof authSignInCancel>
type AuthSignOut = ReturnType<typeof authSignOut>

export type Action =
    & AuthSignInStart
    & AuthSignInSuccess
    & AuthSignInError
    & AuthSignInFinish
    & AuthSignInCancel
    & AuthSignOut

Object.freeze(ActionTypes)

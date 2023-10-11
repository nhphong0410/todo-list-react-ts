import { ActionTypes, Action } from './action'

export type AuthState = {
    loading: boolean
}

const initialState: AuthState = {
    loading: false
}

export const reducer = (state: AuthState = initialState, action: Action): AuthState => {
    switch (action.type) {
        case ActionTypes.SIGN_IN_START:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false
            }
        case ActionTypes.SIGN_IN_ERROR:
            return {
                ...state,
                loading: false
            }
        case ActionTypes.SIGN_IN_FINISH:
            return {
                ...state,
                loading: false
            }
        case ActionTypes.SIGN_IN_CANCEL:
            return {
                ...state,
                loading: false
            }
        case ActionTypes.SIGN_OUT:
            return {
                ...state
            }
        default:
            return state
    }
}

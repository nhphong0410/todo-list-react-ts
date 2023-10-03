import { ActionTypes, Action } from './action'

export type CounterState = {
    count: number,
    loading: boolean
}

const initialState: CounterState = {
    count: 0,
    loading: false
}

export const reducer = (state: CounterState = initialState, action: Action): CounterState => {
    switch (action.type) {
        case ActionTypes.INCREASE:
            return {
                ...state,
                count: state.count + 1
            }
        case ActionTypes.DECREASE:
            return {
                ...state,
                count: state.count - 1
            }
        case ActionTypes.INCREASE_BY_AMOUNT:
            return {
                ...state,
                count: state.count + action.payload.amount
            }
        case ActionTypes.INCREASE_ASYNC_START:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.INCREASE_ASYNC_SUCCESS:
            return {
                ...state,
                count: state.count + action.payload.amount,
                loading: false
            }
        case ActionTypes.INCREASE_ASYNC_ERROR:
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}

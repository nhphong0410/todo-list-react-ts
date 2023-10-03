export const ActionTypes = {
    INCREASE: 'COUNTER/INCREASE',
    DECREASE: 'COUNTER/DECREASE',
    INCREASE_BY_AMOUNT: 'COUNTER/INCREASE_BY_AMOUNT',
    INCREASE_ASYNC_START: 'COUNTER/INCREASE_ASYNC_START',
    INCREASE_ASYNC_SUCCESS: 'COUNTER/INCREASE_ASYNC_SUCCESS',
    INCREASE_ASYNC_ERROR: 'COUNTER/INCREASE_ASYNC_ERROR'
}

// payload types
type CounterIncreaseByAmountPayload = {
    amount: number
};
type CounterIncreaseAsyncSuccessPayload = {
    amount: number
};

// actions
const counterIncrease = () => ({
    type: ActionTypes.INCREASE,
});
const counterDecrease = () => ({
    type: ActionTypes.DECREASE,
});
const counterIncreaseByAmount = (payload: CounterIncreaseByAmountPayload) => ({
    type: ActionTypes.INCREASE_BY_AMOUNT,
    payload,
});
const counterIncreaseAsyncStart = () => ({
    type: ActionTypes.INCREASE_ASYNC_START,
});
const counterIncreaseAsyncSuccess = (payload: CounterIncreaseAsyncSuccessPayload) => ({
    type: ActionTypes.INCREASE_ASYNC_SUCCESS,
    payload,
});
const counterIncreaseAsyncError = () => ({
    type: ActionTypes.INCREASE_ASYNC_ERROR
})

export const actions = {
    counterIncrease,
    counterDecrease,
    counterIncreaseByAmount,
    counterIncreaseAsyncStart,
    counterIncreaseAsyncSuccess,
    counterIncreaseAsyncError
}

// action types
type CounterIncrease = ReturnType<typeof counterIncrease>
type CounterDecrease = ReturnType<typeof counterDecrease>
type CounterIncreaseByAmount = ReturnType<typeof counterIncreaseByAmount>
type CounterIncreaseAsyncStart = ReturnType<typeof counterIncreaseAsyncStart>
type CounterIncreaseAsyncSuccess = ReturnType<typeof counterIncreaseAsyncSuccess>
type CounterIncreaseAsyncError = ReturnType<typeof counterIncreaseAsyncError>

export type Action =
    | CounterIncrease
    | CounterDecrease
    | CounterIncreaseByAmount
    | CounterIncreaseAsyncStart
    | CounterIncreaseAsyncSuccess
    | CounterIncreaseAsyncError

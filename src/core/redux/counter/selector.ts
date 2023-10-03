import { AppState } from "core/redux";

export const counterSelectCount = (state: AppState) => state.counter.count
export const counterSelectLoading = (state: AppState) => state.counter.loading

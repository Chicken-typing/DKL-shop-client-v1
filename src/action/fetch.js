import { FETCH_API, FETCH_API_SUCCESS, FETCH_API_FAILURE } from "../ActionType"
export const fetchAPI = () => {
    return {
        type: FETCH_API
    }
}
export const fetchAPISuccess = res => {
    return {
        type: FETCH_API_SUCCESS,
        payload: {
            data:res
        }
    }
}
export const fetchAPIFailure = error => {
    return {
        type: FETCH_API_FAILURE,
        payload: {
            error:error
        }
    }
}
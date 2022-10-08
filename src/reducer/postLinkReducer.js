import { POST_LINK } from "../ActionType";
const initialize = { link: "" }
const postLinkReducer = (state = initialize, action) => {
    switch (action.type) {
        case POST_LINK:
            return {
                ...state,
                link:action.payload
            }
        default:
            return {...state}
    }
}
export default postLinkReducer
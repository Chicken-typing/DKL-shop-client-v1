import { POST_LINK } from "../ActionType"

const postLink = (url) => {
    return{
        type: POST_LINK,
        payload:url
    }
}
export default postLink
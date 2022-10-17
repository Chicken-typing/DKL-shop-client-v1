import {
  fetchStatic,
  fetchAccessionSuccess,
  fetchRevenueSuccess,
  fetchNeededSuccess,
} from "../action";
import {
  FETCH_API_STATIC,
  FETCH_API_STATIC_ACCESSION_SUCCESS,
  FETCH_API_STATIC_NEEDED_SUCCESS,
  FETCH_API_STATIC_REVENUE_SUCCESS,
} from "../ActionType";

const initialize = {
  dataRevenue: [],
  dataAccession: [],
  dataNeeded: [],
};
const fetchStaticReducer = (state = initialize, action) => {
  switch (action.type) {
    case FETCH_API_STATIC:
      return {
        ...state,
      };
    case FETCH_API_STATIC_REVENUE_SUCCESS:
      return {
        ...state,
        dataRevenue: action.payload.dataRevenue,
      };
    case FETCH_API_STATIC_ACCESSION_SUCCESS:
      return {
        ...state,
        dataAccession: action.payload.dataAccession,
      };
    case FETCH_API_STATIC_NEEDED_SUCCESS:
      return {
        ...state,
        dataNeeded: action.payload.dataNeeded,
      };

    default:
      return {
        ...state,
      };
  }
};
export default fetchStaticReducer;

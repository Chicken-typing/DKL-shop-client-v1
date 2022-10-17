import {
  FETCH_API_STATIC,
  FETCH_API_STATIC_NEEDED_SUCCESS,
  FETCH_API_STATIC_REVENUE_SUCCESS,
  FETCH_API_STATIC_ACCESSION_SUCCESS,
} from "../ActionType";

export const fetchStatic = (params) => {
  return {
    type: FETCH_API_STATIC,
    params,
  };
};
export const fetchRevenueSuccess = (res) => {
  return {
    type: FETCH_API_STATIC_REVENUE_SUCCESS,
    payload: {
      dataRevenue: res,
    },
  };
};
export const fetchAccessionSuccess = (res) => {
  return {
    type: FETCH_API_STATIC_ACCESSION_SUCCESS,
    payload: {
      dataAccession: res,
    },
  };
};

export const fetchNeededSuccess = (res) => {
  return {
    type: FETCH_API_STATIC_NEEDED_SUCCESS,
    payload: {
      dataNeeded: res,
    },
  };
};

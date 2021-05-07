import axios from "axios";
import { api_ac_list, api_ts_list, api_fy_list, api_data_list } from "./Apis";

export const getData = (filter, dispatch) => {
  axios({
    method: "post",
    url: api_data_list,
    headers: { "Content-Type": "application/json" },
    data: filter,
  })
    .then((res) => {
      dispatch({ type: "SET_DATA", data: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getACList = (dispatch) => {
  axios
    .get(api_ac_list)
    .then((res) => {
      dispatch({ type: "SET_FILTER_LIST", list: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getTSList = (dispatch) => {
  axios
    .get(api_ts_list)
    .then((res) => {
      dispatch({ type: "SET_FILTER_LIST", list: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getFYList = (filter, dispatch) => {
  axios
    .get(api_fy_list(filter))
    .then((res) => {
      dispatch({ type: "SET_FILTER_FY_LIST", list: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

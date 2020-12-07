import axios from "axios";
import { GET_DASHBAORD_DATA } from "./actionTypes";

const URL = "https://api.mocki.io/v1/abd57e83";

export const getDashboardData = () => {
  return (dispatch: any) =>
    axios
      .get(URL)
      .then(({ data }) => {
        dispatch({
          type: GET_DASHBAORD_DATA,
          payload: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
};

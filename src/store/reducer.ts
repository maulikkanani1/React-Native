import { reducerTypes } from "../Types";
import { GET_DASHBAORD_DATA } from "./actionTypes";

const initialState: reducerTypes = {
  dashboardData: {
    block_data: [],
    total_revenue: {
      value1: 0,
      value2: 0,
    },
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DASHBAORD_DATA:
      return {
        ...state,
        dashboardData: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;

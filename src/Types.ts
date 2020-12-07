export interface dashboardDataTypes {
  block_data: Array<{
    unit: String;
    block_name: String;
    normal_data: String;
    current_data: String;
  }>;
  total_revenue: {
    value1: Number;
    value2: Number;
  };
}
export interface reducerTypes {
  dashboardData: dashboardDataTypes;
}

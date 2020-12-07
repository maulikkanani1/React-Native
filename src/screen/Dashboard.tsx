import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import DashboardCards from "../components/DashboardCards";
import Header from "../components/Header";
import Celender from "../components/Celender";
import { reducerTypes } from "../Types";

import { getDashboardData } from "../store/actions";

export default function Dashboard() {
  const dispatch = useDispatch();
  const dashboardData = useSelector(({ dashboardData }: reducerTypes) => dashboardData);

  React.useEffect(() => {
    dispatch(getDashboardData());
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Celender />
      <DashboardCards
        totalRevenue={dashboardData.total_revenue.value1}
        toatlUser={dashboardData.total_revenue.value2}
        block_data={dashboardData.block_data}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0D47",
  },
});

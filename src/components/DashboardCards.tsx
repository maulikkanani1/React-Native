import React, { useRef } from "react";
import { StyleSheet, View, Animated } from "react-native";
import { Card, Text } from "react-native-elements";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { LineChart, Grid, AreaChart, BarChart, Path } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { Defs, LinearGradient, Stop } from "react-native-svg";

const CustomeAreaChart = () => {
  const data = [10, 24, 50, 40, 95, 85, 91, 35, 53, 50];
  const contentInset = { top: 0, bottom: 0 };

  const Line = ({ line }: any) => <Path key="line" d={line} stroke={"#cacfcc"} fill="none" />;
  const Gradient = () => (
    <Defs key={"gradient"}>
      <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
        <Stop offset={"0%"} stopColor={"rgb(255, 255, 255)"} />
        <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
      </LinearGradient>
    </Defs>
  );

  return (
    <AreaChart
      style={{ height: 70 }}
      data={data}
      curve={shape.curveCatmullRom}
      svg={{ fill: "rgba(134, 65, 244, 0.2)", strokeWidth: 2, stroke: "url(#gradient)" }}
      contentInset={contentInset}
    >
      <Line />
      <Gradient />
    </AreaChart>
  );
};

const CustomeLineChart = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const contentInset = { top: 0, bottom: 0 };
  const Gradient = () => (
    <Defs key={"gradient"}>
      <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
        <Stop offset={"0%"} stopColor={"rgb(255, 255, 255)"} />
        <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
      </LinearGradient>
    </Defs>
  );

  return (
    <LineChart
      style={{ height: 80 }}
      data={data}
      contentInset={contentInset}
      svg={{
        strokeWidth: 2,
        stroke: "url(#gradient)",
      }}
    >
      <Grid />
      <Gradient />
    </LineChart>
  );
};

const CustomeBarChart = () => {
  const data = [50, 10, 40, 95, 85, 91, 35, 53];
  const contentInset = { top: 20, bottom: 0 };
  return (
    <BarChart style={{ height: 100 }} data={data} svg={{ fill: "" }} contentInset={contentInset}>
      <Grid />
    </BarChart>
  );
};

export default function DashboardCards({ totalRevenue, toatlUser, block_data }: any) {
  const fadeAnim1 = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim1, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  if (!block_data.length) {
    return <></>;
  }

  React.useEffect(() => {
    if (block_data.length) {
      fadeIn();
    }
  }, [block_data]);

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardcoulmn}>
        <Animated.View style={[{ opacity: fadeAnim1 }]}>
          <Card containerStyle={{ ...styles.cardMain, backgroundColor: "#62d6f5" }}>
            <Text style={styles.cardTitle}>{block_data[0].block_name}</Text>
            <View style={styles.cardDatatext}>
              <Text style={{ ...styles.cardTitle, fontSize: 18 }}>{block_data[0].current_data}</Text>
              <Text style={{ ...styles.cardTitle, marginLeft: 5 }}>{block_data[0].unit}</Text>
            </View>
            <View style={styles.cardnormalText}>
              <Text>Normal </Text>
              <Text>{block_data[0].normal_data}</Text>
            </View>
            <View style={styles.cardBadge}>
              <FontAwesome5 name="heartbeat" size={25} color="white" />
            </View>
            <View style={styles.chartContainer}>
              <CustomeAreaChart />
            </View>
          </Card>
        </Animated.View>
        <View>
          <Card containerStyle={{ ...styles.cardMain, backgroundColor: "#D2A905" }}>
            <Text style={styles.cardTitle}>{block_data[1].block_name}</Text>
            <View style={styles.cardDatatext}>
              <Text style={{ ...styles.cardTitle, fontSize: 18 }}>{block_data[1].current_data}</Text>
              <Text style={{ ...styles.cardTitle, marginLeft: 5 }}>{block_data[1].unit}</Text>
            </View>
            <View style={styles.cardnormalText}>
              <Text>Normal </Text>
              <Text>{block_data[1].normal_data} </Text>
            </View>
            <View style={styles.cardBadge}>
              <FontAwesome5 name="fire" size={25} color="white" />
            </View>
            <View style={styles.chartContainer}>
              <CustomeAreaChart />
            </View>
          </Card>
        </View>
        <View style={{ display: "flex", marginVertical: 10, paddingHorizontal: 18 }}>
          <Text style={{ ...styles.cardTitle }}>Total Users</Text>
          <Text style={{ ...styles.cardTitle }}>{toatlUser} User</Text>
        </View>
      </View>
      <View style={styles.cardcoulmn}>
        <View style={{ display: "flex", marginVertical: 10, paddingHorizontal: 18 }}>
          <Text style={{ ...styles.cardTitle, alignSelf: "flex-end" }}>Total Revenue</Text>
          <Text style={{ ...styles.cardTitle, alignSelf: "flex-end" }}>$ {totalRevenue}</Text>
        </View>

        <View>
          <Card containerStyle={{ ...styles.cardMain, backgroundColor: "#FF0090" }}>
            <Text style={styles.cardTitle}>{block_data[2].block_name}</Text>
            <View style={styles.cardDatatext}>
              <Text style={{ ...styles.cardTitle, fontSize: 18 }}>{block_data[2].current_data}</Text>
              <Text style={{ ...styles.cardTitle, marginLeft: 5 }}>{block_data[2].unit}</Text>
            </View>
            <View style={styles.cardnormalText}>
              <Text>Normal </Text>
              <Text>{block_data[2].normal_data}</Text>
            </View>
            <View style={styles.cardBadge}>
              <Ionicons name="md-bicycle" size={25} color="white" />
            </View>
            <View style={styles.chartContainer}>
              <CustomeLineChart />
            </View>
          </Card>
        </View>
        <View>
          <Card containerStyle={{ ...styles.cardMain, backgroundColor: "#054FA4" }}>
            <Text style={styles.cardTitle}>{block_data[2].block_name}</Text>
            <View style={styles.cardDatatext}>
              <Text style={{ ...styles.cardTitle, fontSize: 18 }}>{block_data[3].current_data}</Text>
              <Text style={{ ...styles.cardTitle, marginLeft: 5 }}>{block_data[3].unit}</Text>
            </View>
            <View style={styles.cardnormalText}>
              <Text>Normal </Text>
              <Text>{block_data[3].normal_data} </Text>
            </View>
            <View style={styles.cardBadge}>
              <FontAwesome5 name="swimmer" size={25} color="white" />
            </View>
            <View style={styles.chartContainer}>
              <CustomeBarChart />
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0D47",
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: "purple",
    borderRadius: 5,
  },
  cardMain: {
    backgroundColor: "#00CCFF",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 0,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
  },
  cardcoulmn: {
    width: "50%",
  },
  cardBadge: {
    position: "absolute",
    top: -20,
    right: -20,
    backgroundColor: "#0C2E66",
    borderBottomStartRadius: 40,
    borderTopStartRadius: 40,
    padding: 15,
  },
  cardTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  cardnormalText: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    borderRadius: 10,
  },
  cardDatatext: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  chartContainer: {
    marginTop: 10,
  },
});

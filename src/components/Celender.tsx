import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { isSameDay, getDate, getYear, addDays, getMonth } from "date-fns";
import GestureRecognizer from "react-native-swipe-gestures";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Celender() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedWeek, setselectedWeek] = React.useState<Array<Date>>([]);

  const isSelected = (item: Date) => isSameDay(selectedDate, new Date(item));

  const OnChangedDate = (item: Date) => {
    setSelectedDate(item);
  };

  React.useEffect(() => {
    nextWeek();
  }, []);

  const lastDate = () => (selectedWeek[6] ? selectedWeek[6] : addDays(new Date(selectedDate), -1));

  const nextWeek = () => {
    const day1 = addDays(new Date(lastDate()), 1);
    const day2 = addDays(day1, 1);
    const day3 = addDays(day2, 1);
    const day4 = addDays(day3, 1);
    const day5 = addDays(day4, 1);
    const day6 = addDays(day5, 1);
    const day7 = addDays(day6, 1);
    setselectedWeek([]);
    setselectedWeek([day1, day2, day3, day4, day5, day6, day7]);
  };

  const prevWeek = () => {
    const day1 = addDays(new Date(selectedWeek[6]), -1);
    const day2 = addDays(day1, -1);
    const day3 = addDays(day2, -1);
    const day4 = addDays(day3, -1);
    const day5 = addDays(day4, -1);
    const day6 = addDays(day5, -1);
    const day7 = addDays(day6, -1);
    setselectedWeek([]);
    setselectedWeek([day1, day2, day3, day4, day5, day6, day7]);
  };

  return (
    <View style={styles.container}>
      <View style={{ marginHorizontal: 15 }}>
        <Text style={styles.primaryText}>OverView</Text>
        <View style={styles.overviewContainer}>
          <Text style={styles.primaryText} h3>
            DashBoard
          </Text>
          <Text style={styles.secondaryText}>
            {monthNames[getMonth(lastDate())]} {getYear(lastDate())}
          </Text>
        </View>
      </View>
      <GestureRecognizer
        onSwipeLeft={(state) => nextWeek()}
        onSwipeRight={(state) => prevWeek()}
        config={{
          velocityThreshold: 0.3,
          directionalOffsetThreshold: 80,
        }}
        style={styles.calendarContainer}
      >
        {/* <View > */}
        {selectedWeek.map((item, index) => (
          <TouchableOpacity key={index} style={styles.calendarItem} onPress={() => OnChangedDate(item)}>
            <View
              style={{ ...styles.dateContainer, ...(!isSelected(item) && { backgroundColor: "#D9D9D9" }) }}
            >
              <Text
                style={{
                  ...styles.dateText,
                  ...(isSelected(item) && { color: "white", fontWeight: "bold" }),
                }}
              >
                {getDate(item)}
              </Text>
            </View>
            <View style={styles.dayContainer}>
              <Text style={isSelected(item) && { fontWeight: "bold" }}>
                {new Date(item).toLocaleString("en-us", { weekday: "long" }).substr(0, 3)}
              </Text>
              {isSelected(item) && (
                <View style={styles.selectedDot}>
                  <Text>.</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}
        {/* </View> */}
      </GestureRecognizer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0D47",
  },
  calendarContainer: {
    marginVertical: 10,
    marginLeft: 9,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  calendarItem: {
    height: 80,
    width: 40,
    borderRadius: 50,
    textAlign: "center",
    backgroundColor: "white",
    marginHorizontal: 5,
    padding: 5,
  },
  dateText: {
    fontSize: 15,
    color: "black",
  },
  dateContainer: {
    backgroundColor: "#FF0090",
    borderRadius: 50,
    padding: 6,
    display: "flex",
    alignItems: "center",
  },
  dayContainer: {
    paddingTop: 10,
  },
  selectedDot: {
    backgroundColor: "#FFCD07",
    height: 10,
    width: 10,
    borderRadius: 50,
    paddingLeft: 10,
    marginLeft: 10,
  },
  primaryText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#F7C608",
    fontSize: 15,
    fontWeight: "bold",
  },
  overviewContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
  },
});

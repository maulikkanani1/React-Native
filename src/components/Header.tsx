import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Image } from "react-native-elements";

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
        <Entypo name="menu" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.nav}>
        <Ionicons style={styles.navItem} name="ios-notifications" size={24} color="white" />
        <FontAwesome style={styles.navItem} name="search" size={24} color="white" />
        <Image
          style={{ ...styles.navItem, ...styles.navImage }}
          source={{ uri: "https://www.cheatsheet.com/wp-content/uploads/2019/06/RDJ-Tony-Stark.jpg" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 40,
    paddingHorizontal: 10,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nav: {
    flexDirection: "row",
    alignItems: "center",
  },
  navItem: {
    paddingHorizontal: 10,
  },
  navImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
});

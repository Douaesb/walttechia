import React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.title}>History</Text>

        <View>
          <View style={styles.divc}>
            <Ionicons
              style={styles.search}
              name="search"
              size={28}
              color="black"
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Search..."
              placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.filterButton}>
              <Ionicons name="filter" size={32} color="black" />

              {/* <TabBarIcon name="filter" size={20} color="#fff" /> */}
              <Text style={styles.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>

          <View style={styles.divc}>
            <Text style={styles.sp}>Today</Text>
          </View>
          <View style={styles.bottom2}>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Wallmart.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Today 12:32</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.price}>-$35.32</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Netflix.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Yesterday 02:12</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.priceG}>+$430.00</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Wallmart.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Dec 24 13:53</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.price}>-$35.32</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.divc}>
            <Text style={styles.sp}>Yesterday</Text>
          </View>
          <View style={styles.bottom2}>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Wallmart.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Today 12:32</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.price}>-$35.32</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Netflix.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Yesterday 02:12</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.priceG}>+$430.00</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Wallmart.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Dec 24 13:53</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.price}>-$35.32</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.divc}>
            <View>
              <Text style={styles.time}>Thursday</Text>
              <Text style={styles.sp}>December 29, 2022</Text>
            </View>
          </View>
          <View style={styles.separator}>
            <Image
              source={require("../../assets/images/Wallmart.png")}
              style={styles.transImage}
            />
            <View style={styles.between}>
              <View style={styles.next}>
                <Text style={styles.tit}>Wallmart</Text>
                <Text style={styles.time}>Dec 24 13:53</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.price}>-$35.32</Text>
                <Image source={require("../../assets/images/rightarr.png")} />
              </View>
            </View>
          </View>
          <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Wallmart.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Dec 24 13:53</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.price}>-$35.32</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/Wallmart.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallmart</Text>
                  <Text style={styles.time}>Dec 24 13:53</Text>
                </View>
                <View style={styles.row}>
                  <Text style={styles.price}>-$35.32</Text>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
        </ScrollView>
        </View>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#045CB4",
    paddingTop: 45,
  },
  scrollContainer: {
    paddingVertical: 20,
  },
  cnt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#045CB4",
    width: "100%",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  circleImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
    // backgroundColor: "rgba(140, 196, 4, 0.5)",
    marginLeft: 8,
  },
  transImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    marginRight: 10,
    // backgroundColor: "rgba(140, 196, 4, 0.5)",
    marginLeft: 8,
  },
  name: {
    gap: 2,
  },
  dist: {
    gap: 8,
  },
  clientName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  profileIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  top: {
    flex: 1.5,
    flexDirection: "column",
    gap: 25,
    alignItems: "center",
    backgroundColor: "#045CB4",
    marginTop: 15,
  },
  solde: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#045CB4",
    marginTop: 10,
  },
  bottom: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "white",
    width: "110%",
    padding: 15,
  },
  bottom2: {
    flexDirection: "column",
    backgroundColor: "white",
    gap: 10,
  },
  contacts: {
    flexDirection: "row",
    height: "20%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 10,
  },
  tit: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  div: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },
  divc: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  divide: {
    color: "white",
    fontSize: 17,
  },
  img: {
    marginLeft: 25,
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#045CB4",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 50,
    width: "90%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  sp: {
    color: "#78838D",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 22,
  },
  span: {
    fontWeight: "medium",
    textAlign: "center",
    marginBottom: 20,
  },
  balance: {
    fontSize: 36,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  rest: {
    fontSize: 20,
    borderBottomColor: "#045CB4",
    paddingBottom: 16,
    borderBottomWidth: 2,
    width: 175,
    textAlign: "center",
  },
  separator: {
    borderBottomWidth: 2,
    paddingBottom: 6,
    borderBottomColor: "#EDEFF6",
    flexDirection: "row",
  },
  between: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  time: {
    color: "#78838D",
  },
  next: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  price: {
    fontSize: 18,
    color: "#B83232",
  },
  priceG: {
    fontSize: 18,
    color: "#289B4F",
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    paddingLeft: 35,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    paddingHorizontal: 15,
    height: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  filterText: {
    color: "black",
    marginLeft: 5,
  },
  search: {
    position: "absolute",
    top: 25,
    left: 6,
    zIndex: 5,
  },
});

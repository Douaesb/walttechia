import React, { useState } from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { Link } from "expo-router";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function HistoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <Text style={styles.title}>Transfer to </Text>
        <View>
          <View style={styles.new}>
            <Image
              source={require("../assets/images/pluss.png")}
              style={styles.circleImage}
            />
            <Text style={styles.span}>New Contact</Text>
          </View>
          <View style={styles.or}>
            <View  style={styles.orline}></View>
            <Text style={styles.ok}>or</Text>
            <View  style={styles.orline}></View>
          </View>
          <View style={styles.divc}>
            <Ionicons
              style={styles.search}
              name="search"
              size={28}
              color="black"
            />
            <TextInput
              style={styles.searchBar}
              placeholder="Search contact (enter phone number)"
              placeholderTextColor="#999"
            />
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.divc}>
              <Text style={styles.sp}>Frequent contacts</Text>
            </View>
            <View style={styles.bottom2}>
              <View style={styles.separator}>
                <Image
                  source={require("../assets/images/prfl1.png")}
                  style={styles.transImage}
                />
                  <Link href={"transfer2"}>
                <View style={styles.between2} >
                  <View style={styles.next}>
                    <Text style={styles.tit}>Ali Ahmed</Text>
                    <Text style={styles.time}>+1-300-555-0119</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.row}
                  >
                    <View style={styles.row}>
                      <Image
                        source={require("../assets/images/rightarr.png")}
                      />
                    </View>
                  </TouchableOpacity>

                </View>
                  </Link>
              </View>
              <View style={styles.separator}>
                <Image
                  source={require("../assets/images/prfl2.png")}
                  style={styles.transImage}
                />
                <View style={styles.between}>
                  <View style={styles.next}>
                    <Text style={styles.tit}>Steve Gates</Text>
                    <Text style={styles.time}>+1-300-555-0161</Text>
                  </View>
                  <View style={styles.row}>
                    <Image source={require("../assets/images/rightarr.png")} />
                  </View>
                </View>
              </View>
              <View style={styles.separator}>
                <Image
                  source={require("../assets/images/prfl3.png")}
                  style={styles.transImage}
                />
                <View style={styles.between}>
                  <View style={styles.next}>
                    <Text style={styles.tit}>Elon Jobs</Text>
                    <Text style={styles.time}>+1-202-555-0171</Text>
                  </View>
                  <View style={styles.row}>
                    <Image source={require("../assets/images/rightarr.png")} />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.divc}>
              <Text style={styles.sp}>All contacts</Text>
            </View>
            <View style={styles.bottom2}>
              <View style={styles.separator}>
                <Image
                  source={require("../assets/images/prfl1.png")}
                  style={styles.transImage}
                />
                <View style={styles.between}>
                  <View style={styles.next}>
                    <Text style={styles.tit}>Ali Ahmed</Text>
                    <Text style={styles.time}>+1-300-555-0119</Text>
                  </View>
                  <View style={styles.row}>
                    <Image source={require("../assets/images/rightarr.png")} />
                  </View>
                </View>
              </View>
              <View style={styles.separator}>
                <Image
                  source={require("../assets/images/prfl2.png")}
                  style={styles.transImage}
                />
                <View style={styles.between}>
                  <View style={styles.next}>
                    <Text style={styles.tit}>Steve Gates</Text>
                    <Text style={styles.time}>+1-300-555-0161 </Text>
                  </View>
                  <View style={styles.row}>
                    <Image source={require("../assets/images/rightarr.png")} />
                  </View>
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
    backgroundColor: "white",
    paddingTop: 45,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 45,
    zIndex: 1,
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
  buttonTextRed: {
    color: "#B83232",
    fontSize: 16,
    fontWeight: "bold",
  },
  sp: {
    color: "#535D66",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },
  span: {
    paddingTop:20
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
    paddingBottom: 20,
    borderBottomColor: "#EDEFF6",
    flexDirection: "row",
  },
  separator2: {
    paddingBottom: 6,
    flexDirection: "row",
  },
  between: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  between2: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "93%",
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
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "100%",
    height: "45%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 35,
  },
  head: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    height: "1%",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  scnd: {
    marginBottom: 40,
  },
  closeButtonText: {
    color: "#045CB4",
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: "#E1E3ED",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  priceModalRed: {
    backgroundColor: "#FFF6F6",
    height: 65,
    marginHorizontal: 16,
    marginVertical: 5,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  priceModal: {
    height: 65,
    marginHorizontal: 16,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#EDEFF6",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceD: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#B83232",
  },
  details: {
    padding: 10,
    color: "#535D66",
    gap: 6,
  },
  copy: {
    padding: 18,
  },
  icon: {
    transform: [{ scaleX: -1 }],
  },
  new: {
    display: "flex",
    paddingHorizontal: 8,
    flexDirection: "row",
    height: "12%",
    paddingVertical:20,
  },
  or:{
    display: "flex",
    flexDirection: "row",
    marginBottom:10
  },
  orline:{
    borderBottomWidth: 2,
    borderBottomColor: "#EDEFF6",
    width: "45%",
  },
  ok:{
    marginHorizontal:12,
    color:"#78838D",
    fontSize: 16
  }
});

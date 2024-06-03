import React from "react";
import Svg, { Circle, Ellipse } from "react-native-svg";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}>
        <View>
          <View style={styles.divc}>
            <Text style={styles.title}>More</Text>
          </View>
          <View style={styles.bottom2}>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/charge.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Charge wallet</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/wtw.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Wallet to Wallet</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/cashin2.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Cash in </Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/cashout2.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Cash out </Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator2}>
              <Image
                source={require("../../assets/images/stats.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Stats</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/upgrade.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Upgrade wallet</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/help.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Help</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../../assets/images/contact.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <Text style={styles.tit}>Contact us</Text>
                </View>
                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
            <View style={styles.leftContainer}>
              <Image
                source={require("../../assets/images/about.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <TouchableOpacity style={styles.next}>
                  <Link href="about" style={styles.tit}>
                    About
                  </Link>
                </TouchableOpacity>

                <View style={styles.row}>
                  <Image source={require("../../assets/images/rightarr.png")} />
                </View>
              </View>
            </View>
          </View>
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
    width: 35,
    height: 35,
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
    textAlign: "center",
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
    paddingTop: 10,
    paddingBottom: 20,
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
    color: "#BAC2C7",
    textAlign: "center",
    marginBottom: 20,
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
    paddingBottom: 14,
    borderBottomColor: "#EDEFF6",
    flexDirection: "row",
  },
  separator2: {
    borderBottomWidth: 8,
    paddingBottom: 24,
    borderBottomColor: "#EDEFF6",
    flexDirection: "row",
    marginBottom: 20,
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
    textAlign: "center",
    justifyContent: "center",
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
});

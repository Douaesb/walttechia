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
      <View style={styles.top}>
        <Image
          style={styles.img}
          source={require("../assets/images/prfl.png")}
        />
        <View style={styles.next}>
          <Text style={styles.tit2}>Douae Sebti</Text>
          <Text style={styles.time2}>Joined 2 years ago</Text>
        </View>
      </View>
      <View style={styles.bottom}>
          <View style={styles.bottom2}>
            <View style={styles.separator}>
              <Image
                source={require("../assets/images/userprfl.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <View>
                    <Text style={styles.time}>Full name</Text>
                    <Text style={styles.tit}>Douae Sebti</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../assets/images/mobile.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <View>
                    <Text style={styles.time}>Mobile</Text>
                    <Text style={styles.tit}>+962 79 890 50 14</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </View>
            </View>
            <View style={styles.separator}>
              <Image
                source={require("../assets/images/email.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <View>
                    <Text style={styles.time}>Email</Text>
                    <Text style={styles.tit}>abdgfx@gmail.com</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Text style={styles.edit}>Edit</Text>
                </View>
              </View>
            </View>
            <View style={styles.sep}>
              <Image
                source={require("../assets/images/pass.png")}
                style={styles.transImage}
              />
              <View style={styles.between}>
                <View style={styles.next}>
                  <View>
                    <Text style={styles.tit}>Change password</Text>
                  </View>
                </View>
                <View style={styles.row}>
                  <Image source={require("../assets/images/rightarr.png")} />
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
    backgroundColor: "white",
    paddingTop: 45,
  },
  top: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 8,
  },
  img: {
    width: 115,
    height: 118,
  },
  transImage: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 10,
    // backgroundColor: "rgba(140, 196, 4, 0.5)",
    marginLeft: 8,
  },
  bottom: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "white",
    width: "110%",
    padding: 15,
    paddingBottom:160
  },
  bottom2: {
    flexDirection: "column",
    backgroundColor: "white",
    gap: 10,
  },
  tit: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  tit2: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
    textAlign: "center"
  },
  separator: {
    borderBottomWidth: 2,
    paddingBottom: 14,
    borderBottomColor: "#EDEFF6",
    flexDirection: "row",
  },
  sep: {
    paddingBottom: 14,
    flexDirection: "row",
  },
  between: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  time: {
    color: "#78838D",
    marginBottom: 2
  },
  time2: {
    color: "#78838D",
    textAlign: "center"
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
  edit: {
    fontSize: 16,
    color: "#045CB4",
  },
});

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
        <View style={styles.cnt}>
          <View style={styles.leftContainer}>
            <Image
              source={require("../../assets/images/prfl1.png")}
              style={styles.circleImage}
            />
            <View style={styles.name}>
              <Text style={styles.clientName}>Hello,</Text>
              <Text style={styles.clientName}>Douae!</Text>
            </View>
          </View>
          <View style={styles.rightContainer}>
            <TouchableOpacity>
              <Link href="profile">
                <Image
                  source={require("../../assets/images/Usericn.png")}
                  style={styles.profileIcon}
                />
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.solde}>
          <Text style={styles.sp}>Main balance</Text>
          <Text style={styles.balance}>
            $14,235
            <Text style={styles.rest}>.34</Text>
          </Text>
        </View>
        <View style={styles.div}>
        <TouchableOpacity>
            <Link href={"cashin1"}>
              <View style={styles.dist}>
                <Image
                  source={require("../../assets/images/cashin.png")}
                  style={styles.img}
                />
                <Text style={styles.divide}>Cash in </Text>
              </View>
            </Link>
          </TouchableOpacity>
         
          <TouchableOpacity>
            <Link href={"cashout1"}>
              <View style={styles.dist}>
                <Image
                  source={require("../../assets/images/cashout.png")}
                  style={styles.img}
                />
                <Text style={styles.divide}>Cash out</Text>
              </View>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity>
            <Link href={"transfer1"}>
              <View style={styles.dist}>
                <Image
                  source={require("../../assets/images/transfer.png")}
                  style={styles.img}
                />
                <Text style={styles.divide}>Transfer</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>Recent Transfers</Text>
        <View style={styles.contacts}>
          <View style={styles.name}>
            <Image
              source={require("../../assets/images/pluss.png")}
              style={styles.circleImage}
            />
            <Text style={styles.span}>Add</Text>
          </View>
          <View style={styles.name}>
            <Image
              source={require("../../assets/images/prfl1.png")}
              style={styles.circleImage}
            />
            <Text style={styles.span}>Douae</Text>
          </View>
          <View style={styles.name}>
            <Image
              source={require("../../assets/images/prfl2.png")}
              style={styles.circleImage}
            />
            <Text style={styles.span}>Hanaa</Text>
          </View>
          <View style={styles.name}>
            <Image
              source={require("../../assets/images/prfl3.png")}
              style={styles.circleImage}
            />
            <Text style={styles.span}>Dounia</Text>
          </View>
          <View style={styles.name}>
            <Image
              source={require("../../assets/images/prfl1.png")}
              style={styles.circleImage}
            />
            <Text style={styles.span}>Imane</Text>
          </View>
        </View>
        <View>
          <View style={styles.divc}>
            <Text style={styles.title}>Latest Transactions</Text>
            <Text style={styles.sp}>View all</Text>
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
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
    paddingTop: 40,
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
});

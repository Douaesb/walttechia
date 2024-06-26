import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import { Link } from "expo-router";

export default function LoginScreen() {
  const [otp, setOtp] = useState("");
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const handleNumberPress = (number: number | string) => {
    if (otp.length < 7) {
      if (otp === "") {
        setOtp("$" + number);
      } else {
        setOtp(otp + number);
      }
    }
  };

  const handleDeletePress = () => {
    if (otp.length > 1) {
      setOtp(otp.slice(0, -1));
    } else {
      setOtp("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View>
          <Text style={styles.header}>
            The wallet 254187563218 will be charged with an amount of
          </Text>
        </View>
        <View>
          <Text style={styles.sp}></Text>
          <TextInput
            style={styles.otp}
            value={otp}
            placeholder="$1,252.00"
            placeholderTextColor="black"
            editable={!isInputDisabled}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Link href="payement" style={styles.buttonText}>
          Confirm
        </Link>
      </TouchableOpacity>
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
  },
  top: {
    flex: 1,
    flexDirection: "column",
    gap: 25,
    alignItems: "center",
    backgroundColor: "white",
    padding: 50,
  },
  bottom: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    width: "110%",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  gridItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  gridText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  deleteIcon: {
    width: 24,
    height: 24,
  },
  header: {
    fontSize: 32,
    fontWeight: "light",
    marginLeft: 24,
    // width:"70%"
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
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
  image: {
    width: 150,
    height: 150,
    marginVertical: 4,
    marginHorizontal: 10,
  },
  icon: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 12,
    top: "57%",
    transform: [{ translateY: -10 }],
  },
  span: {
    color: "#78838D",
    marginTop: 10,
    textAlign: "center",
  },
  sp: {
    color: "#78838D",
    textAlign: "center",
    marginBottom: 20,
  },
  otp: {
    fontSize: 40,
    borderBottomColor: "black",
    paddingBottom: 16,
    borderBottomWidth: 2,
    width: 175,
    textAlign: "center",
  },
  count: {
    color: "black",
    fontWeight: "bold",
  },
  between: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "80%",
  },
  transImage: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
    // backgroundColor: "rgba(140, 196, 4, 0.5)",
    marginLeft: 8,
  },
  time: {
    color: "#78838D",
  },
  next: {
    flex: 1,
  },
  tit: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
});

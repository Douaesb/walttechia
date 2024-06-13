import React, { useState, useEffect } from "react";
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

export default function LoginScreen() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(120); // 2 minutes in seconds
  const [isInputDisabled, setIsInputDisabled] = useState(false);

  const handleNumberPress = (number: number) => {
    if (otp.length < 6) {
      setOtp(otp + number);
    }
  };

  const handleDeletePress = () => {
    setOtp(otp.slice(0, -1));
  };

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    } else {
      setIsInputDisabled(true);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View>
          <Svg width="200" height="25" viewBox="0 0 200 200">
            <Circle cx="650" cy="120" r="60" fill="#8CC404" />
            <Circle cx="520" cy="130" r="30" fill="#8CC404" />
          </Svg>
          <Text style={styles.header}>WALTTECHIA</Text>
        </View>

        <Text style={styles.title}>
          An SMS sent to your mobile number +962 79 XXX-XXXX
        </Text>
        <View>
          <Text style={styles.sp}>Enter six-digit code</Text>
          <TextInput
            style={styles.otp}
            value={otp}
            placeholder="XXX-XXX"
            placeholderTextColor="#BAC2C7"
            editable={!isInputDisabled}
          />
          <Text style={[styles.span, timer === 0 && styles.resendActive]}>
            {timer > 0 ? `Resend code ${formatTime(timer)}` : "Resend code"}
          </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.gridRow}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.gridItem}
              onPress={() => handleNumberPress(number)}
            >
              <Text style={styles.gridText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.gridRow}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.gridItem}
              onPress={() => handleNumberPress(number)}
            >
              <Text style={styles.gridText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.gridRow}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              style={styles.gridItem}
              onPress={() => handleNumberPress(number)}
            >
              <Text style={styles.gridText}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridItem} />
          <TouchableOpacity
            style={styles.gridItem}
            onPress={() => handleNumberPress(0)}
          >
            <Text style={styles.gridText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem} onPress={handleDeletePress}>
            <Image
              source={require("../assets/images/deleteicn.png")}
              style={styles.deleteIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
      {/* <Link href="password" style={styles.buttonText}>Done</Link> */}
      <Link href="home" style={styles.buttonText}>Done</Link>

        {/* <Text style={styles.buttonText}>Done</Text> */}
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
    marginTop: 15,
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
    fontSize: 25,
    fontWeight: "bold",
    color: "#045CB4",
    marginLeft: 24,
    fontFamily: "itim",
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
    color: "#BAC2C7",
    textAlign: "center",
    marginBottom: 20,
  },
  otp: {
    fontSize: 40,
    borderBottomColor: "#045CB4",
    paddingBottom: 16,
    borderBottomWidth: 2,
    width: 175,
    textAlign: "center"
  },
  count: {
    color: "black",
    fontWeight: "bold",
  },
  resendActive: {
    color: "#045CB4",
    fontWeight:"bold",
  },
});

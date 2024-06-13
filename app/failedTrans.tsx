import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from "@/components/Themed";
import Svg, { Circle } from 'react-native-svg';
import { Link, Tabs } from 'expo-router';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';

async function loadFonts() {
  await Font.loadAsync({
    'INKNUTANTIQUA': require('../assets/fonts/inknutanqua.ttf'),
    'itim': require('../assets/fonts/itim.ttf'),

  });
}
loadFonts();
export default function TabOneScreen() {
 
  return (
    <View style={styles.all}>

    <View style={styles.container}>
      <Image
        source={require('../assets/images/FailedTrans.png')}
        style={styles.image}
      />

    </View>
    <TouchableOpacity style={styles.button}>
        <Link href="home" style={styles.buttonText}>
          Back to home 
        </Link>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingHorizontal: 20,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#FFF6F6",

  },
  image: {
    width: 280,
    height: 300,
    marginVertical: 4,
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
});

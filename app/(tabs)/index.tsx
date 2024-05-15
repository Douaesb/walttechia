import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, View } from "@/components/Themed";
import Svg, { Circle } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native'; 
import { Link, Tabs } from 'expo-router';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Link href='login'>
      <Image
        source={require('../../assets/images/WalletW.png')}
        style={styles.image}
      />
      </Link>
      <Svg width="200" height="25" viewBox="0 0 200 200">
        <Circle cx="650" cy="120" r="60" fill="#8CC404" />
        <Circle cx="520" cy="130" r="30" fill="#8CC404" />
      </Svg>
      <Text style={styles.title}>WALTTECHIA</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#045CB4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing:3,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 4,
  },
});

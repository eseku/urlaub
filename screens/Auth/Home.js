import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Image,
  Dimensions,
  Text
} from "react-native";
import { Larsseit } from "~/components/fonts";
import { DarkButton, LightButton } from "~/components/buttons";
// import ViewPager from "~/components/viewpager";

import ViewPager from "@react-native-community/viewpager";

//screen dimensions
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Home = props => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <View>
        <Image
          source={{
            uri:
              "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }}
          style={{
            width: screenWidth,
            height: screenHeight / 2,
            resizeMode: "cover"
          }}
        />
      </View>

      <View style={styles.lowerView}>
        <View style={styles.inner}>
          <View>
            <Larsseit style={{ fontSize: 40, textAlign: "center" }}>
              Welcome to Urlaub
            </Larsseit>
          </View>

          <View style={{ alignItems: "center" }}>
            <Larsseit style={{ textAlign: "center" }}>
              View Pager did not work las las, would have been here
            </Larsseit>
            <Image
              source={{
                uri:
                  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/237/face-with-pleading-eyes_1f97a.png"
              }}
              style={{
                width: 50,
                height: 50
              }}
            />
          </View>

          <View>
            <DarkButton
              title="SIGN UP"
              function={() => props.navigation.navigate("Signup")}
            />
            <LightButton
              title="LOGIN"
              function={() => props.navigation.navigate("Login")}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative"
  },
  heading: {
    fontSize: 30
  },
  inner: {
    paddingBottom: 10,
    flex: 1,
    justifyContent: "space-between"
  },
  lowerView: {
    position: "absolute",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    bottom: 0,
    padding: 20,
    height: screenHeight / 1.5,
    backgroundColor: "white",
    width: screenWidth
  }
});

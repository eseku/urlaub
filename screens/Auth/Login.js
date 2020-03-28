import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Image,
  Dimensions,
  Alert
} from "react-native";
import { Circular, Larsseit } from "~/components/fonts";
import { DarkButton } from "~/components/buttons";
import { SignupForm } from "~/components/forms";
import { Ionicons } from "@expo/vector-icons";

//screen dimensions
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Login = props => {
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
              "https://images.pexels.com/photos/2062431/pexels-photo-2062431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }}
          style={{
            width: screenWidth,
            height: screenHeight / 2
          }}
        />
      </View>

      <View style={styles.lowerView}>
        <View style={styles.inner}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => props.navigation.pop()}>
                <Ionicons name="ios-arrow-back" size={30} />
              </TouchableOpacity>
            </View>

            <View style={{ flex: 20, alignItems: "center", paddingTop: 10 }}>
              <Larsseit style={{ fontSize: 40, textAlign: "center" }}>
                Log In
              </Larsseit>
            </View>
          </View>

          <View>
            <SignupForm />
            <DarkButton title="LOGIN" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Login;

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
    flex: 1
    // justifyContent: 'space-between'
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

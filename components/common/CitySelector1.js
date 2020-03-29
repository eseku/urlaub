import React from "react";
import Modal from "react-native-modal";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from "react-native";
import { Larsseit, Circular } from "~/components/fonts";
import { AntDesign } from "@expo/vector-icons";

const screenHeight = Math.round(Dimensions.get("screen").height);

const cities = [
  "Accra, Ghana",
  "Hamilton, Ohio",
  "Dubai, UAE",
  "Lagos, Nigeria",
  "Tokyo, Japan",
  "Kyoto, North Korea",
  "London, UK"
];

function City(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
    >
      <View
        style={{
          paddingVertical: 50,
          borderWidth: 3,
          borderColor: "#f15353",
          marginBottom: 10,
          backgroundColor: "#F7E3E3",
          borderRadius: "10",
          marginRight: 20,
          paddingHorizontal: 20
        }}
      >
        <Larsseit
          style={{
            fontSize: 30,
            textAlign: "center"
          }}
        >
          {props.city}
        </Larsseit>
      </View>
    </TouchableOpacity>
  );
}

export default function() {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedCity, setSelectedCity] = React.useState("");

  return (
    <>
      <View style={{ marginVertical: 40 }}>
        <TouchableOpacity
          onPress={() => {
            setShowModal(!showModal);
          }}
        >
          <View style={{}}>
            <Circular style={{ color: "#acacac" }}>Choose country</Circular>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderColor: "#acacac",
              borderBottomWidth: 1,
              alignItems: "center",
              paddingTop: 10
            }}
          >
            <View>
              <Larsseit style={{ fontSize: 40 }}>
                {selectedCity && selectedCity}
              </Larsseit>
            </View>
            <View>
              <AntDesign name="down" />
            </View>
          </View>
          <Modal
            onBackdropPress={() => setShowModal(!showModal)}
            onSwipeComplete={() => setShowModal(!showModal)}
            isVisible={showModal}
            hideModalContentWhileAnimating
            style={{
              margin: 0,
              justifyContent: "flex-end"
            }}
          >
            <View
              style={{
                marginTop: 50,
                paddingHorizontal: 20,
                backgroundColor: "white",
                height: screenHeight / 1.5,
                borderTopRightRadius: 25,
                borderTopLeftRadius: 25
              }}
            >
              <View style={{ padding: 20 }}>
                <Larsseit style={{ fontSize: 50 }}>Select City</Larsseit>
                <View style={{ paddingVertical: 20, marginBottom: -30 }}>
                  <ScrollView contentContainerStyle={{}}>
                    {cities.map((city, index) => {
                      return (
                        <City
                          city={city}
                          key={index}
                          onPress={() => {
                            setSelectedCity(city);
                            setShowModal(false);
                          }}
                        />
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            </View>
          </Modal>
        </TouchableOpacity>
      </View>
    </>
  );
}

function selectCity(city) {
  setSelectedCity(city);
  setShowModal(false);
}

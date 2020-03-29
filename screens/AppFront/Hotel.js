import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { Circular, Larsseit } from "~/components/fonts";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { LikeButton } from "~/components/common";

//screen dimensions
const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const Hotel = props => {
  return (
    <View style={{ flex: 1, position: "relative" }}>
      <View>
        <Image
          source={{
            uri: props.route.params.image_url
          }}
          style={{
            width: screenWidth,
            height: screenHeight / 2
          }}
        />
      </View>

      <View
        style={{
          position: "absolute",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          bottom: 0,
          padding: 20,
          height: screenHeight / 1.6,
          backgroundColor: "white",
          width: screenWidth
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ marginRight: 20, flexDirection: "row" }}>
            {[1, 2, 3, 4, 5].map(item => (
              <FontAwesome
                name={"star"}
                key={item}
                style={{ color: "#f15353" }}
              />
            ))}
          </View>
          <View>
            <Circular style={{ color: "#acacac" }}>174 reviews</Circular>
          </View>
        </View>
        <View style={{ paddingVertical: 10, justifyContent: "center" }}>
          <Larsseit style={{ fontSize: 50 }}>
            {props.route.params?.name}
          </Larsseit>
          <Circular>
            <Entypo name="location-pin" size={20} />
            {props.route.params?.location}
          </Circular>
        </View>
        <View style={{ marginVertical: 30 }}>
          <Circular
            style={{ fontSize: 20, color: "#acacac" }}
            numberOfLines={3}
          >
            {props.route.params.desc}
          </Circular>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <View style={{ paddingTop: 5 }}>
            <Larsseit style={{ fontSize: 25 }}>Photos</Larsseit>
          </View>
          <View>
            <Circular style={{ color: "#f15353" }}>See all ></Circular>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ flexDirection: "row", marginVertical: 10 }}>
              {props.route.params.images?.map((item, index) => {
                return (
                  <View style={{ marginRight: 10 }} key={index}>
                    <Image
                      source={{
                        uri: item
                      }}
                      style={{ width: 120, height: 120, borderRadius: 18 }}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View style={{ flex: 6 }}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{
                backgroundColor: "#f15353",
                padding: 18,
                marginRight: 10,
                marginTop: 5,
                borderRadius: 8
              }}
            >
              <Larsseit
                style={{ alignSelf: "center", color: "white", fontSize: 30 }}
              >
                Book a room
              </Larsseit>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <LikeButton height={65} width={60} padding={5} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Hotel;

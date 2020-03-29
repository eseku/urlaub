import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Larsseit, Circular } from "~/components/fonts";
import LikeButton from "./LikeButton";

const HotelCard = props => {
  // console.log(props);
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate("Hotel", props)}
      activeOpacity={0.9}
      style={{
        width: 240,
        borderRadius: 25,
        shadowColor: "#F1C2C2",
        marginBottom: 15,
        shadowOffset: {
          width: 5,
          height: 5
        },
        shadowOpacity: 0.27,
        shadowRadius: 20,
        backgroundColor: "#fff",
        marginHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 10
      }}
    >
      <View style={{ width: "100%" }}>
        <Image
          source={{
            uri: props.image_url
          }}
          style={{
            width: "100%",
            height: 200,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25
          }}
        />
      </View>
      <View>
        <View style={{ padding: 10 }}>
          <View>
            <Larsseit style={{ fontSize: 32 }}>{props.name}</Larsseit>
          </View>
          <View>
            <Circular
              style={{ fontSize: 20, color: "#acacac" }}
              numberOfLines={2}
            >
              {props.desc}
            </Circular>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: 10,
              alignItems: "center"
            }}
          >
            <View>
              <View style={{ paddingBottom: 5 }}>
                <Circular style={{ color: "#acacac" }}>from</Circular>
              </View>
              <View>
                <Larsseit style={{ fontSize: 35 }}>
                  ${props.price_start}
                </Larsseit>
              </View>
            </View>
            <View>
              <LikeButton padding={8} width={"100%"} />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelCard;

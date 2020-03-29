import React from "react";
import { View, StyleSheet, StatusBar, ScrollView, Image } from "react-native";
import { Circular, Larsseit } from "~/components/fonts";
import { Feather, Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { hotels } from "~/context/storage";
import { HotelCard, CitySelector } from "../../components/common";

const Home = props => {
  return (
    <>
      {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 20, backgroundColor: "transparent" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <View>
              <Feather name="align-left" size={30} />
            </View>
            <View>
              <Circular style={{ fontSize: 30 }}>Explore</Circular>
            </View>
            <View>
              <Ionicons name="ios-search" size={30} />
            </View>
          </View>

          <CitySelector />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={{ paddingHorizontal: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginBottom: 10 }}
              >
                {["All", "Popular", "Featured", "Cheapest"].map(
                  (item, index) => (
                    <Larsseit
                      style={{
                        fontSize: 30,
                        marginRight: 30,
                        color: item === "Popular" ? "#f15353" : "#acacac"
                      }}
                      key={index}
                    >
                      {item}
                    </Larsseit>
                  )
                )}
              </ScrollView>
            </View>

            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {hotels[0].map((hotel, index) => (
                  <HotelCard
                    key={index}
                    {...hotel}
                    navigation={props.navigation}
                  />
                ))}
              </ScrollView>
            </View>
          </View>

          <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center"
              }}
            >
              <View>
                <Larsseit style={{ fontSize: 35 }}>We Recommend</Larsseit>
              </View>
              <View>
                <Circular style={{ fontSize: 20, color: "#f15353" }}>
                  See all <Entypo name="chevron-right" size={20} />
                </Circular>
              </View>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {hotels[1].map((hotel, index) => (
                  <HotelCard
                    key={index}
                    {...hotel}
                    navigation={props.navigation}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    borderColor: "black",
    paddingTop: 20
  }
});

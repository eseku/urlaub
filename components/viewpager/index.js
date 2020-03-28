import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ViewPager from "@react-native-community/viewpager";

const MyPager = props => {
  const [page, setPage] = React.useState();
  console.log("viewpager");
  return (
    <ViewPager
      style={styles.viewPager}
      initialPage={0}
      orientation="horizontal"
      transitionStyle="scroll"
      scrollEnabled={true}
      showPageIndicator={true}
      pageMargin={3}
      onPageScroll={e => console.log(e)}
      onPageScrollStateChanged={() => {}}
      onPageSelected={() => {}}
      keyboardDismissMode={"none"}
    >
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </ViewPager>
  );
};

export default MyPager;

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
});

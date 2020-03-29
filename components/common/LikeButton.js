import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const LikeButton = props => {
  const [liked, setLiked] = React.useState(props.liked);

  return (
    <TouchableOpacity
      style={{
        width: props.width,
        height: props.height,
        padding: props.padding,
        borderRadius: 8,
        backgroundColor: "#F7E3E3",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <MaterialIcons size={20} name="favorite" style={{ color: "#f15353" }} />
    </TouchableOpacity>
  );
};

export default LikeButton;

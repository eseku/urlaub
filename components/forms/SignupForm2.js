import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Form = props => {
  return (
    <View style={{ marginTop: 20 }}>
      {props.mode === "signup" && (
        <>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.TextInput}
              placeholder="Full Name"
              autoFocus={true}
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.TextInput}
              placeholder="Phone Number"
              keyboardType="phone-pad"
            />
          </View>
        </>
      )}

      <View style={styles.formGroup}>
        <TextInput style={styles.TextInput} placeholder="Email Id" />
      </View>

      <View style={[styles.formGroup]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    borderColor: "#7F7F7F",
    borderRadius: 30,
    padding: 10,
    fontFamily: "circular",
    fontSize: 25,
    paddingHorizontal: 25,
    paddingVertical: 20,
    color: "#7F7F7F"
  },
  formGroup: {
    marginBottom: 20
  }
});

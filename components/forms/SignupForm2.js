import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Form = props => {
  const [name, mutateName] = useState("");
  const [phone, mutatePhone] = useState("");
  const [email, mutateEmail] = useState("");
  const [password, mutatePassword] = useState("");

  return (
    <View style={{ marginTop: 20 }}>
      {props.mode === "signup" && (
        <>
          <View style={styles.formGroup}>
            <TextInput
              style={styles.TextInput}
              placeholder="Full Name"
              autoFocus={true}
              value={name}
              onChangeText={text => mutateName(text.trim())}
            />
          </View>

          <View style={styles.formGroup}>
            <TextInput
              style={styles.TextInput}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={text => mutatePhone(text)}
            />
          </View>
        </>
      )}

      <View style={styles.formGroup}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email Id"
          keyboardType="email-address"
          value={email}
          onChangeText={text => mutateEmail(text)}
        />
      </View>

      <View style={[styles.formGroup]}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => mutatePassword(text)}
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
    borderRadius: 60,
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

import React, { useState, useContext } from "react";
import { View, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import AuthContext from "../../../contexts/AuthContext";

import Input from "../../../components/Forms/Input/index";
import Button from "../../../components/UI/Button/index";

import styles from "./LoginScreen.styles";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder="Heslo"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Přihlásit" onPress={() => login(email, password)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

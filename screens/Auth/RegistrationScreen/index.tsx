import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from '../../../types/types';

import Input from "../../../components/Forms/Input";
import Button from "../../../components/UI/Button";

import styles from "./RegistrationScreen.styles";

const RegistrationScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

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
        <Button title="Registrovat" onPress={(first) => {}} />
        <Button
          title="Přihlásit se"
          onPress={() => navigation.navigate("Přihlásit se")}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;

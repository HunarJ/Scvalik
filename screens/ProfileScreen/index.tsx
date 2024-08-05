import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import AuthContext from "../../contexts/AuthContext";

import Button from "../../components/UI/Button";
import Input from "../../components/Forms/Input";

import styles from "./ProfileScreen.styles";

const ProfileScreen = () => {
  const { logout, email, password } = useContext(AuthContext);
  const [profileEmail, setProfileEmail] = useState(email)
  const [profilePass, setProfilePass] = useState(password);

  return (
    <View style={styles.container}>
      <Text>Profil</Text>
      <Input
        placeholder="Email"
        value={profileEmail}
        onChangeText={setProfileEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Input
          placeholder="Heslo"
          value={profilePass}
          onChangeText={setProfilePass}
          secureTextEntry
        />
      <Button title="Uložit" />
      <Button title="Odhlásit se" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;

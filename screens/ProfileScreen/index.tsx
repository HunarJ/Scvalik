import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import AuthContext from '../../contexts/AuthContext';

const ProfileScreen = () => {
    const { logout } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profil</Text>
      <Button title="Odhlásit se" onPress={logout} />
    </View>
  );
}

export default ProfileScreen;

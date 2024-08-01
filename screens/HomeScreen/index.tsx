import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './HomeScreen.styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
          <Image source={require('../../assets/images/Scvalik-logo.webp')} style={styles.logo} />
          <Text style={styles.title}>Vítejte v aplikaci Scvalik</Text>
          <Text style={styles.text}>Pro užívání aplikace se přihlaste</Text>
        </View>
      );
}

export default HomeScreen;

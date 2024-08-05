import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./Card.styles";
import Button from "../Button";
import SmallButton from "../SmallButton";

interface CardProps {
  title: string;
  description: string;
  workoutId: string;
}

const Card = ({ title, description, workoutId }: CardProps) => {
const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text>{description}</Text>
      <View style={styles.buttonContainer}>
        <SmallButton title="Detail" onPress={() => navigation.navigate('WorkoutDetailScreen', {workoutId})} />
        <SmallButton title="Trénovat" />
      </View>
    </View>
  );
};

export default Card;

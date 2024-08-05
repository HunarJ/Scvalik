import React from "react";
import { View, Text, ScrollView } from "react-native";

import styles from "./WorkoutsScreen.styles";
import Card from "../../components/UI/Card";

import workouts from "../../constants/workouts";

const WorkoutsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.mainTitle}>Sestavené tréninky</Text>
      {workouts.map((workout) => {
        return (
          <Card
            key={workout.id}
            title={workout.title}
            description={workout.description}
            workoutId={workout.id}
          />
        );
      })}
    </ScrollView>
  );
};

export default WorkoutsScreen;

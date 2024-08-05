import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import styles from './WorkoutDetailScreen.styles';
import workouts from '../../constants/workouts';

const WorkoutDetailScreen = () => {
    const route = useRoute<RouteProp<{ params: { workoutId: string } }, 'params'>>();
  const workout = workouts.find(w => w.id === route.params.workoutId);
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.mainTitle}>{workout?.title}</Text>
            <Text>{workout?.description}</Text>
        </ScrollView>
    );
}

export default WorkoutDetailScreen;

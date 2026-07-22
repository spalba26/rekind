import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const demoExercises = [
  {
    name: 'Goblet squat',
    sets: 3,
    repetitions: 10,
  },
  {
    name: 'Push-up',
    sets: 3,
    repetitions: 8,
  },
  {
    name: 'Dumbbell row',
    sets: 3,
    repetitions: 12,
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.brand}>Rekind</Text>
        <Text style={styles.tagline}>
          You don&apos;t start over. You rekindle.
        </Text>
      </View>

      <View style={styles.routineSection}>
        <Text style={styles.sectionLabel}>DEMO ROUTINE</Text>
        <Text style={styles.routineName}>Full Body Foundation</Text>
        <Text style={styles.routineDescription}>
          A simple full-body session to begin training consistently.
        </Text>

        <View style={styles.exerciseList}>
          {demoExercises.map((exercise) => (
            <View key={exercise.name} style={styles.exerciseCard}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exercisePlan}>
                {exercise.sets} sets × {exercise.repetitions} reps
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 32,
    backgroundColor: '#111827',
  },
  header: {
    marginBottom: 40,
  },
  brand: {
    marginBottom: 8,
    color: '#ffffff',
    fontSize: 36,
    fontWeight: '700',
  },
  tagline: {
    color: '#d1d5db',
    fontSize: 16,
    lineHeight: 24,
  },
  routineSection: {
    width: '100%',
  },
  sectionLabel: {
    marginBottom: 8,
    color: '#9ca3af',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  routineName: {
    marginBottom: 8,
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '700',
  },
  routineDescription: {
    marginBottom: 24,
    color: '#9ca3af',
    fontSize: 15,
    lineHeight: 22,
  },
  exerciseList: {
    gap: 12,
  },
  exerciseCard: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 12,
    backgroundColor: '#1f2937',
  },
  exerciseName: {
    marginBottom: 6,
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  exercisePlan: {
    color: '#d1d5db',
    fontSize: 15,
  },
});

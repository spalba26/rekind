import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>Rekind</Text>
      <Text style={styles.tagline}>
        You don&apos;t start over. You rekindle.
      </Text>
      <Text style={styles.description}>
        Adaptive training and nutrition companion.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#111827',
  },
  title: {
    marginBottom: 12,
    color: '#ffffff',
    fontSize: 42,
    fontWeight: '700',
  },
  tagline: {
    marginBottom: 8,
    color: '#e5e7eb',
    fontSize: 18,
    textAlign: 'center',
  },
  description: {
    color: '#9ca3af',
    fontSize: 15,
    textAlign: 'center',
  },
});
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rekind</Text>

      <Text style={styles.tagline}>
        You don’t start over. You rekindle.
      </Text>

      <Text style={styles.description}>
        Adaptive training and nutrition companion.
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#ffffff',
  },
  title: {
    marginBottom: 12,
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
  },
  tagline: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
  },
});
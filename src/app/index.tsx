import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expo Product Explorer</Text>

      <Text style={styles.name}>Muhammad Sammad Israr</Text>

      <Text style={styles.roll}>Roll No: 23i-3042</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    marginBottom: 10,
  },
  roll: {
    fontSize: 18,
  },
});
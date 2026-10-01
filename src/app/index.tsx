import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';

type Product = {
  id: string;
  name: string;
  price: string;
};

const products: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: '$49.99' },
  { id: '2', name: 'Smart Watch', price: '$79.99' },
  { id: '3', name: 'Portable Speaker', price: '$29.99' },
];

export default function Index() {
  const handleViewProduct = (product: Product) => {
    Alert.alert(product.name, `Price: ${product.price}`);
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.name}>Muhammad Sammad Israr</Text>
        <Text style={styles.roll}>Roll No: 23i-3042</Text>
      </View>

      <Text style={styles.title}>Expo Product Explorer</Text>

      <Text style={styles.sectionTitle}>Products</Text>

      {products.map((product) => (
        <View key={product.id} style={styles.productCard}>
          <View>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
          </View>

          <Button
            title="View"
            onPress={() => handleViewProduct(product)}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  container: {
    padding: 20,
    paddingTop: 60,
  },

  header: {
    backgroundColor: '#e0f2fe',
    borderRadius: 8,
    marginBottom: 24,
    padding: 16,
  },

  name: {
    color: '#111827',
    fontSize: 22,
    fontWeight: 'bold',
  },

  roll: {
    color: '#374151',
    fontSize: 18,
    marginTop: 4,
  },

  title: {
    color: '#111827',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  sectionTitle: {
    color: '#111827',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  productCard: {
    alignItems: 'center',
    borderColor: '#d1d5db',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 16,
  },

  productName: {
    color: '#111827',
    fontSize: 18,
    fontWeight: '600',
  },

  price: {
    color: '#4b5563',
    fontSize: 16,
    marginTop: 4,
  },
});
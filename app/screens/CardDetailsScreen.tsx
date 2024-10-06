import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { Card } from '../models/Card';

type CardDetailsScreenRouteProp = RouteProp<
  { CardDetails: { card: Card } },
  'CardDetails'
>;

interface CardDetailsScreenProps {
  route: CardDetailsScreenRouteProp;
}

const CardDetailsScreen: React.FC<CardDetailsScreenProps> = ({ route }) => {
  const { card } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.description}>{card.description}</Text>
      {/* Add more details as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default CardDetailsScreen;
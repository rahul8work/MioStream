import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from '../models/Card';

interface CardListItemProps {
  card: Card;
}

const CardListItem: React.FC<CardListItemProps> = ({ card }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{card.title}</Text>
      <Text style={styles.description}>{card.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default CardListItem;
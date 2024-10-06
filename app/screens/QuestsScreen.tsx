import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardListItem from '../components/CardListItem';
import { Card } from '../models/Card';

const QuestsScreen = () => {
  const navigation = useNavigation();
  const [cards, setCards] = React.useState<Card[]>([]);

  React.useEffect(() => {
    // Fetch quest cards from API or local storage
    // For now, we'll use dummy data
    setCards([
      { id: '5', title: 'Quest Card 1', description: 'Quest Description 1' },
      { id: '6', title: 'Quest Card 2', description: 'Quest Description 2' },
      // Add more dummy quest cards as needed
    ]);
  }, []);

  const handleCardPress = (card: Card) => {
    navigation.navigate('CardDetails', { card });
  };

  return (
    <FlatList
      data={cards}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleCardPress(item)}>
          <CardListItem card={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default QuestsScreen;
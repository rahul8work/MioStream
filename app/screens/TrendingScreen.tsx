import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardListItem from '../components/CardListItem';
import { Card } from '../models/Card';

const TrendingScreen = () => {
  const navigation = useNavigation();
  const [cards, setCards] = React.useState<Card[]>([]);

  React.useEffect(() => {
    // Fetch trending cards from API or local storage
    // For now, we'll use dummy data
    setCards([
      { id: '3', title: 'Trending Card 1', description: 'Trending Description 1' },
      { id: '4', title: 'Trending Card 2', description: 'Trending Description 2' },
      // Add more dummy trending cards as needed
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

export default TrendingScreen;
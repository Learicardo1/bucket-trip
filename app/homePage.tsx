import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Hardcoded Data
const trips = [
  {
    id: 1,
    title: 'NYC Adventure',
    attractions: [
      { id: 1, title: 'Empire State Building' },
      { id: 2, title: 'Central Park' },
    ],
    dates: 'March 10 - March 15',
  },
  {
    id: 2,
    title: 'Brooklyn Highlights',
    attractions: [
      { id: 3, title: 'Brooklyn Bridge' },
      { id: 4, title: 'DUMBO' },
    ],
    dates: 'April 5 - April 7',
  },
];

const attractions = [
  {
    id: 1,
    title: 'Statue of Liberty',
    description: 'A symbol of freedom and democracy, located on Liberty Island.',
    location: {
      address: 'Liberty Island',
      city: 'New York',
      state: 'NY',
      country: 'USA',
    },
    category: 'Viewpoints',
    tags: ['Landmark', 'Viewpoint', 'Iconic'],
  },
  {
    id: 2,
    title: 'Central Park',
    description: 'A sprawling park in the heart of Manhattan.',
    location: {
      address: 'Central Park',
      city: 'New York',
      state: 'NY',
      country: 'USA',
    },
    category: 'Nature',
    tags: ['Park', 'Recreation', 'Manhattan'],
  },
];

const HomePage = ({ navigation }) => {
  const handleNewTrip = () => alert('New Trip Creation!');
  const handleTripDetails = (tripId) => alert(`Navigate to Trip Details for ID: ${tripId}`);
  const handleAttractionDetails = (attractionId) => alert(`Navigate to Attraction Details for ID: ${attractionId}`);

  return (
    <View style={styles.container}>
      {/* Greeting Section */}
      <Text style={styles.greeting}>Welcome back, Traveler!</Text>
      <Text style={styles.stats}>You have {trips.length} trips planned.</Text>

      {/* Create New Trip */}
      <TouchableOpacity style={styles.newTripButton} onPress={handleNewTrip}>
        <Text style={styles.newTripText}>+ Start a New Trip</Text>
      </TouchableOpacity>

      {/* Upcoming Trips */}
      <Text style={styles.sectionTitle}>Upcoming Trips</Text>
      <FlatList
        horizontal
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tripCard} onPress={() => handleTripDetails(item.id)}>
            <Text style={styles.tripTitle}>{item.title}</Text>
            <Text style={styles.tripDetails}>
              {item.attractions.length} attractions | {item.dates}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Recommended Attractions */}
      <Text style={styles.sectionTitle}>Recommended Attractions</Text>
      <FlatList
        data={attractions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.attractionCard} onPress={() => handleAttractionDetails(item.id)}>
            <Text style={styles.attractionTitle}>{item.title}</Text>
            <Text style={styles.attractionDescription}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  greeting: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  stats: { fontSize: 16, color: '#888' },
  newTripButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 10, alignItems: 'center', marginVertical: 20 },
  newTripText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  tripCard: { backgroundColor: 'white', padding: 15, marginRight: 10, borderRadius: 10, width: 150 },
  tripTitle: { fontSize: 16, fontWeight: 'bold' },
  tripDetails: { fontSize: 14, color: '#888' },
  attractionCard: { backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 10 },
  attractionTitle: { fontSize: 16, fontWeight: 'bold' },
  attractionDescription: { fontSize: 14, color: '#888' },
});

export default HomePage;
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ThreeStarRating = ({ rating }) => {
  const stars = 3; // Total stars
  const fillPercentage = Math.min(rating, 100) / stars; // Percentage per star

  return (
    <View style={styles.container}>
      {[...Array(stars)].map((_, index) => {
        const starFill = Math.min(1, Math.max(0, (rating / 100) * stars - index));
        return (
          <View key={index} style={styles.star}>
            <FontAwesome name="star-o" size={23} color="#E0E0E0" />
            <View
              style={[
                styles.partialFill,
                { width: `${starFill * 100}%` },
              ]}
            >
              <FontAwesome name="star" size={23} color="#FFC300" />
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 5,
  },
  star: {
    position: 'relative',
  },
  partialFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
});

export default ThreeStarRating;




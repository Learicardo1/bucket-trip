import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

function Tags ()  {
  const tags = [
    { label: 'Skiing', season: 'winter' },
    {label: 'Snowboarding', season: 'winter' },
    { label: 'Snowboarding', season: 'winter' },
    { label: 'Beach', season: 'summer' },
    { label: 'Hiking', season: 'summer' },
    { label: 'Skiing', season: 'winter' },
    { label: 'Beach', season: 'summer' },
    { label: 'Hiking', season: 'summer' },
  ];

  return (
   
      <View style={styles.tagsContainer}>
        {tags.map((tag, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.tagButton,
              tag.season === 'winter' ? styles.winterTag : styles.summerTag,
            ]}
          >
            <Text style={styles.tagText}>{tag.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    
  );
};



const styles = StyleSheet.create({
    tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows tags to wrap to the next line
    justifyContent: 'center',
  },
  tagButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 15,
    margin: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  winterTag: {
    backgroundColor: '#1E90FF', // Blue for winter
  },
  summerTag: {
    backgroundColor: '#FFA500', // Orange for summer
  },
});

export default Tags;
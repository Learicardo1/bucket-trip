import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import { Link } from 'expo-router';
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';
import attractions from '~/assets/attractions.json';



const AttractionListItem = ( attractions) => {
  const [isCompleted, setIsCompleted] = useState(false);
 
 console.log(attractions.title)
    
        
 const toggleCompletion = () => {
  setIsCompleted(!isCompleted);
}; 
 
  const onItemPress = () => {};
  

  return (
    
   
    <View style={styles.container}>
      {/* Checkbox */}
      <TouchableOpacity style={styles.checkbox} onPress={toggleCompletion}>
        {isCompleted && <View style={styles.checkboxSelected} />}
      </TouchableOpacity>

      {/* Item Content */}
      <TouchableOpacity style={styles.content} onPress={onItemPress}  >
        <Text style={[styles.title, isCompleted && styles.completedTitle]}>
          {attractions.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};



export default AttractionListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    width: 16,
    height: 16,
    backgroundColor: '#007AFF',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#333',
  },
  completedTitle: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
});
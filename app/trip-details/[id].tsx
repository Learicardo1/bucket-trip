import { View, Text, Image ,StyleSheet, Dimensions, Pressable, ScrollView} from 'react-native'
import {useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('window');
import dummydata from '~/assets/dummydata.json'; 
import ThreeStarRating from '~/components/PopularityStars';
import AttractionListItem from '~/components/AttractionListItem';
import attractions from '~/assets/attractions.json';
const Atraction = () => {
    const [added, setAdded] = useState(false);
    const addEvent = () => {
        setAdded(!added);
    }    
    const attraction = dummydata.attractions[0];
    console.log(attraction)
  return (
    <View style={styles.container}>
          
          <Image
              style={styles.placeImage}
              source={{uri: attraction.uri}}
          />


          <View style={styles.titleContainer}>
              <Text style={styles.title}>{attraction.title}</Text>
              {/*<Text>hello</Text>*/}
              <ThreeStarRating rating={attraction.rating} />
          </View>
       
          <View style={styles.placeMarker}>
              <FontAwesome name="map-marker" size={18} color="red" />
              <Text style={styles.placeMarkerText}>{attraction.location.city}</Text>
          </View>
          
           <ScrollView style={styles.scrollView} >
                <Text style={styles.descriptionText}>{attraction.description}</Text>
           </ScrollView>
           
             {/**/}
    
    {/*footer*/}
          <View className=' bottom-0 left-0 right-0 border-t-2 border-gray-300 p-5  flex-row items-center'>
            <Text className='mr-auto text-2xl font-semibold'>{attraction.ticket_price}</Text>
            <View className=" justify-center items-center">
                <Pressable
                    onPress={addEvent}
                    className={`rounded-md p-3 px-4 w-40 h-15 justify-center items-center ${added ? 'bg-red-500' : 'bg-green-500'}`}>
                        <Text className="text-lg font-bold text-white">
                             {added ? 'Add to my trip' : 'You are visiting'}
                        </Text>
                </Pressable>
            </View>
          </View>
        
        {/**/}

    </View>
    
    


    
  )
}

export default Atraction
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#F5f5f5',
    },
placeImage:{
    resizeMode:"cover",
    width: width,
    height: height * 0.4,
    backgroundColor: 'white',
},
titleContainer:{
    width: '100%',
    height:'auto',
    alignItems: 'center',
    paddingRight:25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5f5f5',
},
title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingLeft: 15,
    backgroundColor: '#F5f5f5',
    
},

placeMarker:{
    width: width,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    color: 'black',
    textAlign: 'left',
    paddingLeft: 15,
    paddingBottom: 5,
    backgroundColor: '#F5f5f5',
  
},
placeMarkerText:{
    fontSize: 18,
    fontWeight: 400,
    color: '#888888',
    textAlign: 'left',
},
descriptionText:{
    flex:1,
    fontSize: 16,
    lineHeight: 22,
    color: '#555555',
    textAlign: 'left',
    paddingTop:5,
    paddingHorizontal:15,
    backgroundColor: '#F5f5f5',
},
scrollView: {
    flex: 1, // Takes up remaining space above the footer
  },
  
})
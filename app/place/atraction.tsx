import { View, Text, Image ,StyleSheet, Dimensions, Pressable, ScrollView} from 'react-native'
import {useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const {width} = Dimensions.get('screen');
const {height} = Dimensions.get('window');

import ThreeStarRating from '~/components/PopularityStars';
const Atraction = () => {
    const [added, setAdded] = useState(false);
    const addEvent = () => {
        setAdded(!added);
    }    
  return (
    <View style={styles.container}>
          
          <Image
              style={styles.placeImage}
              source={{uri: 'https://imgur.com/dfno5i2.jpg'}}
          />


          <View style={styles.titleContainer}>
              <Text style={styles.title}>Brooklin Bridge</Text>
              {/*<Text>hello</Text>*/}
              <ThreeStarRating rating={90} />
          </View>
       
          <View style={styles.placeMarker}>
              <FontAwesome name="map-marker" size={18} color="red" />
              <Text style={styles.placeMarkerText}>New York</Text>
              
          </View>
            
           
           
           <ScrollView style={styles.scrollView} >
                <Text style={styles.descriptionText}>Brooklyn Bridge, suspension bridge spanning the East River from Brooklyn to Manhattan Island, New York City. A brilliant feat of           19th-century engineering, the Brooklyn Bridge was the first bridge to use steel for cable wire.
              The bridge is featured on many walking and bike tours, and there are also sightseeing cruises and helicopter flights that offer views of the bridge
              Brooklyn Bridge, suspension bridge spanning the East River from Brooklyn to Manhattan Island, New York City. A brilliant feat of           19th-century engineering, the Brooklyn Bridge was the first bridge to use steel for cable wire.Brooklyn Bridge, suspension bridge spanning the East River from Brooklyn to Manhattan Island, New York City. A brilliant feat of 19th-century engineering, the Brooklyn Bridge was the first bridge to use steel for cable wire.
              The bridge is featured on many walking and bike tours, and there are also sightseeing cruises and helicopter flights that offer views of the bridge
              Brooklyn Bridge, suspension bridge spanning the East River from Brooklyn to Manhattan Island, New York City. A brilliant feat of           19th-century engineering, the Brooklyn Bridge was the first bridge to use steel for cable wire.</Text>
           </ScrollView>
           
             {/**/}
    
    {/*footer*/}
          <View className=' bottom-0 left-0 right-0 border-t-2 border-gray-300 p-5  flex-row items-center'>
            <Text className='mr-auto text-2xl font-semibold'>Free</Text>
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
    backgroundColor: '#F5f5f5',
  
},
placeMarkerText:{
    fontSize: 18,
    fontWeight: 400,
    color: '#888888',
    textAlign: 'left',
    
    //position: 'absolute',
    //bottom: 0,
    //left: 0
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
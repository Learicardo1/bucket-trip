import { View, Text, Image ,StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const {width, height} = Dimensions.get('screen');
import Tags from '~/components/Tags';
import ThreeStarRating from '~/components/PopularityStars';
const Atraction = () => {
  
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
      
          <Text style={styles.descriptionText}>     Brooklyn Bridge, suspension bridge spanning the East River from Brooklyn to Manhattan Island, New York City. A brilliant feat of           19th-century engineering, the Brooklyn Bridge was the first bridge to use steel for cable wire.
              The bridge is featured on many walking and bike tours, and there are also sightseeing cruises and helicopter flights that offer views of the bridge</Text>
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
    fontSize: 16,
    color: '#555555',
    textAlign: 'left',
    paddingTop:5,
    paddingHorizontal:15,
    backgroundColor: '#F5f5f5',
}
})
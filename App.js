import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Platform,
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
    };
  }

  componentDidMount(){
    this.handleUpdateLocation("San Francisco")
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  };

  render() {
    const { location } = this.state;

    return (
      <View style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>
              Light Cloud
            </Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>

            <SearchInput
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
const styles  = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FEEAE6',
   },
     textStyle: {
     textAlign: 'center',
     fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
     color: "#442C2E"
   },
     largeText: {
     fontSize: 44,
   },
     smallText: {
     fontSize: 18,
   },
//  flex is responsible for image to cover full width and resize mode makes it look like that covering full screen on zooming
   imageContainer: {
     flex: 1,
   },
   image: {
     flex: 1,
     width: null,
     height: null,
     resizeMode: 'cover',
   },
   detailsContainer: {
     flex: 1,
     justifyContent: 'center',
     backgroundColor: 'rgba(0,0,0,0.2)',
     paddingHorizontal: 20,
     },
})
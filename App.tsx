import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TripSummaryScreen from './src/screens/TripSummaryScreen';
import FindRideScreen from './src/screens/FindRideScreen';
import GooglePlacesInput from './src/components/GooglePlacesInput';
import RideListScreen from './src/screens/RideListScreen';

const App = () => {
  return (
    <View>
      {/* <FindRideScreen /> */}
      {/* <TripSummaryScreen /> */}
      <RideListScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

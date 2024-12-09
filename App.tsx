import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TripSummaryScreen from './src/screens/TripSummaryScreen';
import FindRideScreen from './src/screens/FindRideScreen';

const App = () => {
  return (
    <View>
      <FindRideScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

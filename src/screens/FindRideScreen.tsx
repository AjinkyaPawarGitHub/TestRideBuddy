import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const FindRideScreen = () => {
  const [count, setCount] = useState<any>(2);
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/Vector.png')}
        style={styles.imgBg}>
        <View style={styles.titleBox}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/Vector-2.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>Find Ride</Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../assets/images/Track.png')}
            style={styles.car1}
          />
        </View>
        <View>
          <Image
            source={require('../assets/images/Track-2.png')}
            style={styles.car2}
          />
        </View>
        <View>
          <Image
            source={require('../assets/images/Track-3.png')}
            style={styles.car3}
          />
        </View>
        <View style={styles.whiteContainer}>
          <View style={styles.notch}></View>
          <View>
            <Text style={styles.whereText}>Where are you going today?</Text>
          </View>
          <View>
            <View style={styles.box}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.blueCircle1}>
                  <View style={styles.blueCircle}></View>
                </View>
                <GooglePlacesAutocomplete
                  placeholder="Enter pickup location"
                  onPress={(data, details = null) => {
                    setPickup(data.description);
                  }}
                  query={{
                    key: 'AIzaSyB32LL4XKWDvHCroQ7RqPu2g6XHgVYaHto',
                    language: 'en',
                  }}
                  suppressDefaultStyles
                  textInputProps={{
                    value: pickup,
                    onChangeText: text => setPickup(text),
                    style: styles.addressText,
                  }}
                />
              </View>
              <TouchableOpacity onPress={() => setPickup('')}>
                <Image
                  source={require('../assets/images/charm_cross.png')}
                  style={styles.cross}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.dottedLine} />

            <View style={styles.box}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={styles.location}
                    source={require('../assets/images/LocationMarker.png')}
                  />
                </View>
                <GooglePlacesAutocomplete
                  placeholder="Enter drop location"
                  onPress={(data, details = null) => {
                    setDestination(data.description);
                  }}
                  query={{
                    key: 'AIzaSyB32LL4XKWDvHCroQ7RqPu2g6XHgVYaHto',
                    language: 'en',
                  }}
                  suppressDefaultStyles
                  textInputProps={{
                    value: destination,
                    onChangeText: text => setDestination(text),
                    style: styles.addressText,
                  }}
                />
              </View>
              <TouchableOpacity onPress={() => setDestination('')}>
                <Image
                  source={require('../assets/images/charm_cross.png')}
                  style={styles.cross}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.dateBox}>
              <Image
                source={require('../assets/images/day.png')}
                style={styles.date}
              />
              <Text style={styles.dateText}>Today</Text>
            </TouchableOpacity>

            <View style={styles.flexBox}>
              <View style={styles.flex}>
                <Image
                  source={require('../assets/images/profile.png')}
                  style={styles.profile}
                />
                <TouchableOpacity onPress={decreament}>
                  <Image
                    source={require('../assets/images/minus.png')}
                    style={styles.plus}
                  />
                </TouchableOpacity>
                <View>
                  <Text style={styles.count}>{count}</Text>
                </View>
                <TouchableOpacity onPress={increament}>
                  <Image
                    source={require('../assets/images/plus.png')}
                    style={styles.plus}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.flex}>
                <Image
                  source={require('../assets/images/check.png')}
                  style={styles.blueTick}
                />
                <View>
                  <Text style={styles.desc}>Only female</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.nextBtn}>
              <Text style={styles.nextText}>Find Rider</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default FindRideScreen;

const styles = StyleSheet.create({
  blueCircle1: {
    height: windowHeight * 0.024,
    width: windowWidth * 0.05,
    backgroundColor: '#EDF1F3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: windowWidth * 0.03,
    marginTop: windowHeight * 0.01,
  },
  blueCircle: {
    height: windowHeight * 0.015,
    width: windowWidth * 0.035,
    backgroundColor: '#2D6CE9',
    borderRadius: 50,
    alignSelf: 'center',
  },
  cross: {
    resizeMode: 'contain',
    height: windowHeight * 0.035,
    width: windowWidth * 0.07,
  },
  location: {
    resizeMode: 'contain',
    height: windowHeight * 0.03,
    width: windowWidth * 0.06,
    marginRight: windowWidth * 0.03,
    marginTop: windowHeight * 0.007,
  },
  whiteContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#00000024',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: 'absolute',
    bottom: 0,
    width: windowWidth * 1,
    elevation: 1,
    padding: windowHeight * 0.017,
  },
  container: {backgroundColor: '#E0DBD5', height: '100%'},
  imgBg: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  arrow: {
    resizeMode: 'contain',
    height: windowHeight * 0.02,
    width: windowWidth * 0.04,
  },
  titleBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: windowHeight * 0.022,
  },
  titleText: {
    alignSelf: 'center',
    color: '#000000',
    lineHeight: 16,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: windowWidth * 0.35,
  },
  title: {
    marginTop: windowHeight * 0.015,
  },
  notch: {
    backgroundColor: '#EBEBED',
    width: windowWidth * 0.15,
    height: windowHeight * 0.01,
    borderRadius: 37,
    marginTop: windowHeight * 0.01,
    marginBottom: windowHeight * 0.02,

    alignSelf: 'center',
  },
  whereText: {
    color: '#0D0D1B',
    lineHeight: 17,
    fontSize: 16,
    fontWeight: '600',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1,
    width: windowWidth * 0.9,
    padding: windowHeight * 0.01,
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
    borderColor: '#E0DBD54D',
    justifyContent: 'space-between',
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 22,
    borderWidth: 1,
    width: windowWidth * 0.9,
    padding: windowHeight * 0.01,
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
    borderColor: '#E0DBD54D',
  },
  date: {
    resizeMode: 'contain',
    height: windowHeight * 0.035,
    width: windowWidth * 0.07,
  },
  dottedLine: {
    borderLeftWidth: 2,
    borderColor: '#DADADA',
    borderStyle: 'dotted',
    height: 70,
    position: 'absolute',
    left: windowWidth * 0.06,
    top: windowHeight * 0.06,
  },
  addressText: {
    color: '#1A1C1E',
    lineHeight: 14,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: windowWidth * 0.02,
    marginTop: windowHeight * 0.008,
  },
  dateText: {
    color: '#1A1C1E',
    lineHeight: 14,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: windowWidth * 0.04,
  },
  nextBtn: {
    backgroundColor: '#3C5FAC',
    width: windowWidth * 0.9,
    padding: windowHeight * 0.017,
    borderRadius: 34,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: windowHeight * 0.05,
    marginBottom: windowHeight * 0.02,
  },
  nextText: {
    color: '#FFFFFF',
    lineHeight: 19.6,
    fontSize: 14,
    fontWeight: '600',
  },
  profile: {
    resizeMode: 'contain',
    width: windowWidth * 0.06,
    height: windowHeight * 0.03,
    marginRight: windowWidth * 0.02,
  },
  plus: {
    resizeMode: 'center',
    width: windowWidth * 0.06,
    height: windowHeight * 0.025,
  },
  blueTick: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.06,
    resizeMode: 'contain',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: windowHeight * 0.02,
  },
  count: {
    color: '#1A1C1E',
    lineHeight: 27,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: windowWidth * 0.025,
    marginRight: windowWidth * 0.025,
  },
  desc: {
    color: '1A1C1E',
    lineHeight: 16,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: windowWidth * 0.02,
  },
  car1: {
    resizeMode: 'contain',
    height: windowHeight * 0.05,
    width: windowWidth * 0.1,
    position: 'absolute',
    top: windowHeight * 0.22,
    left: windowWidth * 0.3,
  },
  car2: {
    resizeMode: 'contain',
    height: windowHeight * 0.05,
    width: windowWidth * 0.1,
    position: 'absolute',
    left: windowWidth * 0.7,
    top: windowHeight * 0.22,
  },
  car3: {
    resizeMode: 'contain',
    height: windowHeight * 0.05,
    width: windowWidth * 0.1,
    position: 'absolute',
    left: windowWidth * 0.7,
  },
});

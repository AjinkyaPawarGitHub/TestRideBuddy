import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const TripSummaryScreen = () => {
  return (
    <View>
      <HeaderComponent />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.tripBox}>
          <Text style={styles.tripText}>Trip I’D - #1BAC9BA4</Text>
        </View>
        <View>
          <Text style={styles.title}>Pick Up & Destination</Text>
        </View>
        <View>
          <View>
            <View style={styles.align}>
              <View style={styles.blueCircle1}>
                <View style={styles.blueCircle}></View>
              </View>
              <Text style={styles.addHeader}>
                Started : 08 Aug 2024, 11:47 AM
              </Text>
            </View>
            <Text style={styles.addressText1}>
              102, Shagun Vijay Nagar Lok Colony, Indore, MP
            </Text>
          </View>
          <View style={styles.dottedLine} />
          <View>
            <View style={styles.align}>
              <View style={styles.redCircle1}>
                <View style={styles.redCircle}></View>
              </View>

              <Text style={styles.addHeader}>
                Ended : 08 Aug 2024, 01:14 PM
              </Text>
            </View>
            <Text style={styles.addressText1}>
              M.G. Railway Colony, Majestic, Bhopal ,MP
            </Text>
          </View>
        </View>
        <View style={styles.underline}></View>
        <View>
          <View>
            <Text style={styles.title}>Your Stops Route</Text>
          </View>
          <View style={styles.align}>
            <View style={styles.circle}>
              <Text style={styles.letter}>A</Text>
            </View>
            <View>
              <Text style={styles.addHeader}>Vijay Nagar</Text>
              <Text style={styles.addressText}>
                123, Shagun Vijay Nagar Lok Colony, Indore, MP
              </Text>
            </View>
          </View>
          <View style={styles.underline}></View>
          <View>
            <View>
              <Text style={styles.title}>Basic Details</Text>
            </View>
            <View>
              <View style={styles.tableDirection}>
                <Text style={styles.basicKey}>Trip Distance:</Text>
                <Text style={styles.basicValue}>244 km </Text>
              </View>
              <View style={styles.tableDirection}>
                <Text style={styles.basicKey}>Trip Duration:</Text>
                <Text style={styles.basicValue}>3hr 55min</Text>
              </View>
              <View style={styles.tableDirection}>
                <Text style={styles.basicKey}>Trip Price:</Text>
                <Text style={styles.basicValue}>Rs. 410/seat</Text>
              </View>
              <View style={styles.tableDirection}>
                <Text style={styles.basicKey}>Total Seats Offering</Text>
                <Text style={styles.basicValue}>03 </Text>
              </View>
            </View>
          </View>
          <View style={styles.underline}></View>
          <View>
            <View>
              <Text style={styles.title}>Vehicle</Text>
            </View>
            <View style={styles.align}>
              <Image
                source={require('../assets/images/fa-solid_car.png')}
                style={styles.car}
              />
              <View style={styles.align}>
                <Text style={styles.vehicleText}>Tata Nexon - AXK 370</Text>
                <Image
                  source={require('../assets/images/blue_tick.png')}
                  style={styles.blueTick}
                />
              </View>
              <View style={styles.descBox}>
                <Image
                  source={require('../assets/images/check.png')}
                  style={styles.blueTick}
                />
                <Text style={styles.descText}>Only Female</Text>
              </View>
            </View>
            <View style={styles.recBox}>
              <Image
                source={require('../assets/images/uiw_reload.png')}
                style={styles.recImg}
              />
              <Text style={styles.recText}>Recurring Ride - Mo,Tu,Th</Text>
            </View>
            <View style={styles.extraBox}>
              <View style={styles.align}>
                <View style={styles.dot}></View>
                <Text style={styles.extraText}>Smoking</Text>
              </View>
              <View style={styles.align}>
                <View style={styles.dot}></View>
                <Text style={styles.extraText}>Music</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.nextBtn}>
              <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TripSummaryScreen;

const styles = StyleSheet.create({
  blueCircle: {
    height: windowHeight * 0.015,
    width: windowWidth * 0.035,
    backgroundColor: '#2D6CE9',
    borderRadius: 50,
    alignSelf: 'center',
  },
  redCircle: {
    height: windowHeight * 0.015,
    width: windowWidth * 0.035,
    backgroundColor: '#E02D3C',
    borderRadius: 50,
    alignSelf: 'center',
  },
  blueCircle1: {
    height: windowHeight * 0.024,
    width: windowWidth * 0.05,
    backgroundColor: '#EDF1F3',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: windowWidth * 0.03,
  },
  redCircle1: {
    height: windowHeight * 0.024,
    width: windowWidth * 0.05,
    backgroundColor: '#F2E4E4',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: windowWidth * 0.03,
  },
  underline: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.0,
    borderWidth: 0.6,
    borderColor: '#F0F0F0',
    alignSelf: 'center',
    marginTop: windowHeight * 0.02,
  },
  circle: {
    height: windowHeight * 0.02,
    width: windowWidth * 0.045,
    backgroundColor: 'transparent',
    borderRadius: 100,
    borderColor: '#6C7278',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: windowWidth * 0.03,
  },
  tableDirection: {flexDirection: 'row', justifyContent: 'space-between'},
  car: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.06,
    resizeMode: 'contain',
  },
  blueTick: {
    height: windowHeight * 0.02,
    width: windowWidth * 0.04,
    resizeMode: 'contain',
  },
  dot: {
    backgroundColor: '#6C7278',
    height: windowHeight * 0.006,
    width: windowWidth * 0.012,
    borderRadius: 50,
    marginLeft: windowWidth * 0.02,
  },
  nextBtn: {
    backgroundColor: '#3C5FAC',
    width: windowWidth * 0.9,
    padding: windowHeight * 0.017,
    borderRadius: 34,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: windowHeight * 0.1,
  },
  nextText: {
    color: '#FFFFFF',
    lineHeight: 19.6,
    fontSize: 14,
    fontWeight: '600',
  },
  align: {flexDirection: 'row', alignItems: 'center'},
  extraText: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    color: '#6C7278',
    marginLeft: windowWidth * 0.02,
  },
  extraBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.04,
  },
  container: {
    padding: windowWidth * 0.04,
    height: '100%',
  },
  recText: {
    color: '#2D6CE9',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 14,
    marginLeft: windowWidth * 0.02,
  },
  recImg: {
    height: windowHeight * 0.015,
    width: windowWidth * 0.03,
    resizeMode: 'contain',
  },
  recBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.02,
  },
  title: {
    color: '#3C5FAC',
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '600',
    marginTop: windowHeight * 0.02,
    marginBottom: windowHeight * 0.02,
  },
  vehicleText: {
    color: '#6C7278',
    lineHeight: 16.94,
    fontSize: 14,
    fontWeight: '500',
    marginLeft: windowWidth * 0.02,
    marginRight: windowWidth * 0.02,
  },
  descText: {
    color: '#1A1C1E',
    lineHeight: 14,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: windowWidth * 0.02,
  },
  descBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: windowWidth * 0.22,
  },
  basicKey: {
    color: '#132235',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: windowHeight * 0.01,
  },
  basicValue: {
    color: '#132235',
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: windowHeight * 0.01,
  },
  addressText: {
    color: '#656565',
    lineHeight: 14.52,
    fontSize: 12,
    fontWeight: '400',
  },
  addressText1: {
    color: '#656565',
    lineHeight: 14.52,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: windowWidth * 0.08,
    marginBottom: windowHeight * 0.01,
  },
  addHeader: {
    color: '#1A1C1E',
    lineHeight: 16.94,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: windowHeight * 0.005,
  },
  letter: {
    color: '#6C7278',
    // lineHeight: 8,
    fontSize: 10,
    fontWeight: '500',
  },
  tripBox: {
    marginLeft: windowWidth * 0.58,
  },
  tripText: {
    color: '#0D0D1B',
    lineHeight: 27,
    fontSize: 14,
    fontWeight: '500',
  },
  dottedLine: {
    borderLeftWidth: 1,
    borderColor: '#DADADA',
    borderStyle: 'dotted',
    height: 50,
    // marginVertical: 10,
    position: 'absolute',
    left: windowWidth * 0.023,
    top: windowHeight * 0.02,
  },
});

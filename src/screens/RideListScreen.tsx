import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {data} from '../utils/data';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const RideListScreen = () => {
  const renderList: any = ({item}: any) => {
    console.log(item);
    return (
      <View style={styles.box}>
        <View style={styles.flex}>
          <View style={styles.flex}>
            <View>
              <View style={styles.profileBg}></View>
            </View>
            <View style={styles.flex}>
              <Text>{item.name}</Text>
              <Image source={item?.isVerified} style={styles.blueTick} />
            </View>
          </View>
          <View style={styles.flex}>
            <Text>{item?.discount}</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <View style={styles.line}></View>
          <View>
            <Text>{item?.date}</Text>
          </View>
          <View style={styles.line}></View>
        </View>

        <View>
          <View>
            <View style={styles.flex}>
              <Text>{item?.depTime}</Text>
              <View style={styles.dot}></View>
              <Text>{item?.depLocation}</Text>
            </View>
            <View>
              <Image
                source={require('../assets/images/Group.png')}
                style={styles.group}
              />
            </View>
          </View>
          <View>
            <View style={styles.flex}>
              <Text>{item?.arriveTime}</Text>
              <View style={styles.dot}></View>
              <Text>{item?.arriveLocation}</Text>
            </View>
            <View>
              <Image
                source={require('../assets/images/Group.png')}
                style={styles.group}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.underline}></View>
          <View style={styles.flex}>
            <View>
              <Text>Vehicle</Text>
              <Text>{item?.vehicle}</Text>
            </View>
            <View>
              <Text>Total seats</Text>
              <Text>{item?.totalSeat}</Text>
            </View>
            <View>
              <Text>Per seat</Text>
              <Text>{item?.perSeat}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View>
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

      <View style={styles.container}>
        <View>
          <View style={styles.box1}>
            <View>
              <View>
                <Text style={styles.locationText}>Indore, MP</Text>
              </View>
              <View>
                <Text style={styles.locationDesc}>Today, 2 passenger </Text>
              </View>
            </View>
            <Image
              source={require('../assets/images/Direction.png')}
              style={styles.direction}
            />
            <View>
              <View>
                <Text style={styles.locationText}>Bhopal, MP</Text>
              </View>
              <View style={styles.flex}>
                <Image
                  source={require('../assets/images/check.png')}
                  style={styles.blueTick}
                />
                <View>
                  <Text style={styles.locationDesc}> {'  '}Only female</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View>
          <View style={styles.todayBox}>
            <Text style={styles.today}>Today</Text>
          </View>

          <FlatList
            renderItem={renderList}
            data={data}
            keyExtractor={(item: any) => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default RideListScreen;

const styles = StyleSheet.create({
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
    marginLeft: windowWidth * 0.32,
  },
  title: {
    // marginTop: windowHeight * 0.015,
  },
  arrow: {
    resizeMode: 'contain',
    height: windowHeight * 0.02,
    width: windowWidth * 0.04,
  },
  group: {
    resizeMode: 'contain',
    height: windowHeight * 0.1,
    width: windowWidth * 0.2,
  },
  direction: {
    resizeMode: 'contain',
    height: windowHeight * 0.02,
    width: windowWidth * 0.14,
  },
  box1: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#E9F0F7',
    borderRadius: 16,
    padding: windowHeight * 0.017,
    width: windowWidth * 0.9,
    justifyContent: 'space-between',
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  blueTick: {
    height: windowHeight * 0.02,
    width: windowWidth * 0.04,
    resizeMode: 'contain',
    marginTop: windowHeight * 0.005,
  },
  desc: {
    color: '#6C7278',
    lineHeight: 16,
    fontSize: 16,
    fontWeight: '400',
    marginLeft: windowWidth * 0.02,
  },
  profileBg: {
    height: windowHeight * 0.05,
    width: windowWidth * 0.11,
    backgroundColor: '#EDF1F3',
    borderWidth: 1,
    borderColor: '#2D6CE9',
    borderRadius: 50,
  },
  line: {
    borderWidth: 0.2,
    borderColor: '#1A1C1E',
    width: windowWidth * 0.25,
  },
  dot: {
    backgroundColor: '#6C7278',
    width: windowWidth * 0.032,
    height: windowHeight * 0.015,
    borderRadius: 50,
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
  underline: {
    borderWidth: 0.6,
    width: windowWidth * 0.8,
    borderColor: '#F0F0F0',
    alignSelf: 'center',
  },
  container: {
    padding: windowHeight * 0.022,
  },
  locationText: {
    color: '#1A1C1E',
    fontWeight: '500',
    fontSize: 15,
    lineHeight: 22.5,
  },
  locationDesc: {
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 14,
    color: '#6C7278',
    marginTop: windowHeight * 0.005,
  },
  today: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
    color: '#000000',
  },
  todayBox: {
    marginTop: windowHeight * 0.03,
  },
  box: {
    marginTop: windowHeight * 0.03,
    width: windowWidth * 0.9,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DADADA4D',
    padding: windowHeight * 0.017,
  },
});

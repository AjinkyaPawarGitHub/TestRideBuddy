import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const HeaderComponent = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <View>
            <Text style={styles.title}>Trip Summary</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.walletBox}>
              <Image
                source={require('../assets/images/wallet.png')}
                style={styles.wallet}
              />
              <Text style={styles.walletAmmount}>230</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.notificationBox}>
              <Image
                source={require('../assets/images/notification.png')}
                style={styles.notification}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1C1E',
    width: windowWidth * 1,
    height: windowHeight * 0.13,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    color: '#FFFFFF',
    lineHeight: 27,
    fontSize: 18,
    fontWeight: '600',
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: windowHeight * 0.03,
    padding: windowHeight * 0.02,
  },
  wallet: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.06,
    resizeMode: 'contain',
  },
  notification: {
    height: windowHeight * 0.03,
    width: windowWidth * 0.06,
    resizeMode: 'contain',
  },
  walletAmmount: {
    color: '#EDF1F3',
    lineHeight: 16,
    fontSize: 12,
    fontWeight: '600',
    marginLeft: windowWidth * 0.01,
  },
  walletBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.25,
    borderColor: '#DADADA',
    padding: windowHeight * 0.001,
    borderRadius: 12,
    width: windowWidth * 0.18,
    justifyContent: 'center',
    backgroundColor: '#F0F0F00F',
    marginRight: windowWidth * 0.03,
  },
  notificationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.25,
    borderColor: '#DADADA',
    padding: windowHeight * 0.005,
    borderRadius: 50,
    width: windowWidth * 0.09,
    justifyContent: 'center',
    backgroundColor: '#F0F0F00F',
  },
});

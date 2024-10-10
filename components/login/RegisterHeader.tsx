import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../constants/Image';

const RegisterHeader = () => {
  return (
    <LinearGradient
      colors={['#FDC830', '#F37335']}
      style={styles.gradientBackground}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={Images.groceryicon}
          resizeMode="contain"
        />
      </View>

      <View style={styles.curvedShape} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconContainer: {
    marginTop: '20%',
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  icon: {
    width: '65%',
    height: '65%',
  },
  curvedShape: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 1,
  },
});

export default RegisterHeader;

import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Image} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../Navigation/StackNavigator';
// import {Images} from '../constants/Image';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../constants/Image';

type SplashProp = NativeStackScreenProps<RootStackParams, 'Splash'>;

const SplashScreen = ({navigation}: SplashProp) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('OnBoarding');
    }, 5000);
  }, [navigation]);

  return (
    <LinearGradient colors={['#FDC830', '#F37335']} style={styles.gradient}>
      <View style={styles.container}>
        <Image style={styles.img} source={Images.ecommerceicon} />
        <Text style={styles.txt}>Algolia Search App</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
});

export default SplashScreen;

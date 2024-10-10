import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../constants/Image';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../Navigation/StackNavigator';
import MovingArrowButton from '../components/MovingArrow';

type OnboardingProp = NativeStackScreenProps<RootStackParams, 'OnBoarding'>;

const OnBoardingScreen = ({navigation}: OnboardingProp) => {
  const [move, setMove] = useState<boolean>(false);

  useEffect(() => {
    if (move) {
      navigation.navigate('Algolia');
    }
  }, [move, navigation]);

  return (
    <LinearGradient colors={['#FDC830', '#F37335']} style={styles.gradient}>
      <View style={styles.container}>
        <Text style={styles.txt}>Welcome User</Text>
        <Image style={styles.img} source={Images.ecommerceicon} />
        <MovingArrowButton
          title="Get Started"
          onPress={() => {
            setMove(true);
          }}
          containerStyles={styles.customButtonStyles}
          textStyles={styles.text}
        />
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
    height: '20%',
    width: '45%',
    marginBottom: '25%',
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: '20%',
  },
  text: {
    color: 'white',
    fontFamily: 'Poppins-Bold',
  },
  customButtonStyles: {
    width: '60%',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    elevation: 8,
    shadowOffset: {width: 0, height: 4},
    shadowRadius: 8,
    marginBottom: '12%',
  },
});

export default OnBoardingScreen;

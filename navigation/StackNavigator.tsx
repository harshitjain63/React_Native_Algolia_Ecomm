import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import Register from '../Screens/Register';
import OnBoardingScreen from '../Screens/OnBoardingScreen';
import Home from '../Screens/Home';
import Login from '../Screens/Login';
import SplashScreen from '../Screens/SplashScreen';
import AlgoliaSearch from '../Screens/AlgoliaSearch';

export type RootStackParams = {
  Home: undefined;
  Splash: undefined;
  Register: undefined;
  Login: undefined;
  OnBoarding: undefined;
  Algolia: undefined;
};

const stack = createNativeStackNavigator<RootStackParams>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <stack.Navigator
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: '#4c2fdc'},
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}>
        <stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={SplashScreen}
        />

        <stack.Screen
          options={{headerShown: false}}
          name="OnBoarding"
          component={OnBoardingScreen}
        />
        <stack.Screen
          options={{headerShown: false}}
          name="Register"
          component={Register}
        />
        <stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'HomeScreen',

            headerBackVisible: false,
          }}
        />
        <stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <stack.Screen name="Algolia" component={AlgoliaSearch} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './homeScreen/HomeScreen';
import GoogleFit, { Scopes } from 'react-native-google-fit';

export default function App() {
    useEffect(() => {
      const options = {
        scopes: [
          Scopes.FITNESS_ACTIVITY_READ_WRITE,
          Scopes.FITNESS_BODY_READ_WRITE,
        ],
      }
    GoogleFit.authorize(options)
      .then((res) => {
        console.log('authorized >>>', res)
      })
      .catch((err) => {
        console.log('err >>> ', err)
      });
  });

  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

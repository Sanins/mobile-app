import React from 'react';
import { Button, View, Text, Image, ScrollView, TextInput } from 'react-native';
import GoogleFit from 'react-native-google-fit';
import moment from 'moment';

export const HomeScreen = () => {
  const apples = () => {
  let dayStart = moment().startOf('day').toISOString(); //ISO Time String
  let dayEnd = moment().endOf('day').toISOString();//ISO Time String

  const options = {
      startDate: dayStart,  // required ISO8601Timestamp
      endDate: dayEnd     // required ISO8601Timestamp
  };

  GoogleFit.getDailyStepCountSamples(options, (err, res) => {
    if (err) {
        throw err;
    }
    console.log("Daily steps >>>", res);
  })
  }

  return (
    <ScrollView>
    <Text>count</Text>
    <Button
      title="Right button"
      onPress={() => apples()}
    />
    <View>
        <Text>Some more text</Text>
        <Image
        source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height: 200 }}
        />
    </View>
    <TextInput
        style={{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
        }}
        defaultValue="You can type in me"
    />
    </ScrollView>
  );
}

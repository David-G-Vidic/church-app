import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import {Agenda} from 'react-native-calendars';
import {Calendar} from 'react-native-calendars';

import React, { useState, useEffect } from 'react';
import {TouchableOpacity } from 'react-native';
/*
const timeToString = (time: string | number | Date) => {
const date = new Date(time);
return date.toISOString().split('T')[0];
};*/





export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Three</Text>
      
     <Calendar
        onDayPress={day => {
         console.log('selected day', day);
        }}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

//export default Schedule;
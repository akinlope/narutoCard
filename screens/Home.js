import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { globalStyle } from '../styles/global';

export default function Home() {
  return (
    <View style={globalStyle.container}>
        <Text style={globalStyle.titleTxt}>Home page</Text>
    </View>
  )
}


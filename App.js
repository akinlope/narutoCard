import { View, Text, StyleSheet, ScrollView, Image, Button, Pressable, StatusBar, ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import NarutoCard from './components/NarutoCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, [])

  // console.log(typeof(data));
  // console.log(data);
  const fetchData = async () => {
    try {
      const response = await axios.get('https://narutodb.xyz/api/character?page=1&limit=100');
      const character = response.data?.characters || []
      setData(character)
      // console.log(character);
    } catch (err) {
      console.log("error ", err);
    }
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        {
          !data || data.length < 1 ?
            (<View style={styles.indicator}>
              <ActivityIndicator size={"large"} color={"#1d4ed8"}/>
            </View>
            )
            :
            (<View>
              <NarutoCard data={data} />
            </View>)
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e8f0",
    padding: 20,
    paddingTop: StatusBar.currentHeight
  },
  view: {
    marginTop: 20
  },
  indicator: {
    // flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#1d4ed8"
  }
})




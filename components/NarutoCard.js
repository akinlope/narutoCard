import React from 'react'
import { Image, ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import bulb from "../assets/bulbasaur.png";

export default function NarutoCard({ data }) {
    // console.log(data);

    
    return (
        // <></>
        <FlatList
            data={data}
            renderItem={({item}) => {
                return (
                    <View style={styles.container} key={item.id}>
                        {/* name */}
                        <View style={styles.contName}>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                        {/* image */}
                        <View style={styles.imgCont}>
                            {/* {console.log(item.images[0])} */}
                            <Image source={{ uri: item.images[0] }} style={styles.img} />
                        </View>
                        {/* jutsu */}
                        <View style={styles.jutsu}>
                            <Text style={styles.jutsuTxt}>Jutsu: {item.jutsu} </Text>
                        </View>
                        {/* presonel */}
                        <View style={styles.personel}>
                            <Text style={styles.personelTxt}>Species: {item.personal.species}</Text>
                        </View>
                        {/* unique traits */}
                        <View style>
                            <Text style={styles.uniqueTraits}>UniqueTraits: {item.uniqueTraits}</Text>
                        </View>
                    </View>
                )
            }}
            keyExtractor={(item, index) => index.toString()} 
            horizontal = {false}
            />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10
    },
    contName: {
        paddingVertical: 10
    },
    name: {
        fontSize: 25,
        fontWeight: "bold"
    },
    imgCont: {
        // backgroundColor:"red",
        flex: 1,
        display: "flex",
        alignItems: "center",
        // justifyContent: "center",
        width: "95%",
        height: 300,
        marginBottom: 10
    },
    img: {
        // backgroundColor: "red",
        height: 300,
        width: "90%",
    },
    jutsu: {
        // marginBottom: 5
    },
    jutsuTxt: {
        fontSize: 16,
        fontWeight: "bold"
    },
    personel: {
        // marginBottom: 5
    },
    personelTxt: {
        fontSize: 16,
        fontWeight: "bold"
    },
    uniqueTraits: {
        fontSize: 16,
        fontWeight: "bold"
    }

})




// <ScrollView>
//     {
//         data.map((character, index) => {
//             return (
//                 <View style={styles.container}key={index}>
//                     {/* name */}
//                     <View style={styles.contName}>
//                         <Text style={styles.name}>{character.name}</Text>
//                     </View>
//                     {/* image */}
//                     <View style={styles.imgCont}>
//                         {console.log(character.images[0])}
//                         <Image source={{ uri: character.images[0] }} style={styles.img} />
//                     </View>
//                     {/* jutsu */}
//                     <View style={styles.jutsu}>
//                         <Text style={styles.jutsuTxt}>Jutsu: {character.jutsu} </Text>
//                     </View>
//                     {/* presonel */}
//                     <View style={styles.personel}>
//                         <Text style={styles.personelTxt}>Species: {character.personal.species}</Text>
//                     </View>
//                     {/* unique traits */}
//                     <View style>
//                         <Text style={styles.uniqueTraits}>UniqueTraits: {character.uniqueTraits}</Text>
//                     </View>
//                 </View>
//             )
//         })
//     }
// </ScrollView>
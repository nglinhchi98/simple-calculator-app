import React from "react";
import {StyleSheet, View, Text, FlatList } from "react-native";

export default function HistoryScreen( { route, navigation }) {

    const {history} = route.params || [];
   
    return (
    <View style={styles.container}>
      <Text>Calculation history</Text>

      <FlatList 
        data={history}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor= {(item, index) => index.toString()}
        style={styles.historyList} />

    </View>
    
    )
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          
        },
        historyList: {
          marginTop: 20,
          alignSelf: 'center',
        },
    });

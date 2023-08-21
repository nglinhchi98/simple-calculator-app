import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [number1, setNumber1] = useState('0');
  const [number2, setNumber2] = useState('0');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const plus = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum.toString());
    setHistory([...history, `${number1} + ${number2} = ${sum}`]);
  };
  const minus = () => {
    const difference = parseFloat(number1) - parseFloat(number2);
    setResult(difference.toString());
    setHistory([...history, `${number1} - ${number2} = ${difference}`]);
  }
   
  return (
    <View style={styles.container}>
      <Text>Calculator: Result is {result}</Text>
      
      <TextInput style={{width: 200, borderColor:'grey', borderWidth:1, height: 32, marginTop:10, padding:5}}
                  onChangeText={ number1 => setNumber1(number1)}
                  keyboardType='numeric'/>
      <TextInput style={{width: 200, borderColor:'grey', borderWidth:1, height: 32, marginTop:10, padding: 5}}
                  onChangeText={ number2 => setNumber2(number2)}
                  keyboardType='numeric'/>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.customButton}
          onPress={plus}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.customButton}
          onPress={minus}>
          <Text style={styles.buttonText}>- </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={history}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor= {(item, index) => index.toString()}
        style={styles.historyList} />

      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  customButton: {
    backgroundColor: 'purple', // Background color of the button
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'purple', // Border color of the button
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 5
  },
  buttonText: {
    color: 'white', // Text color of the button
    textAlign: 'center',
  },
  historyList: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

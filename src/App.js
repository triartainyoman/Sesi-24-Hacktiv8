import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text>Absen Nama :</Text>
      <TextInput
        testID="inputNama"
        onChangeText={name => setName(name)}
        style={styles.input}
        placeholder={'Name'}
        value={name}
      />
      <TouchableOpacity
        testID="submitNama"
        onPress={() => Alert.alert('nama', name)}>
        <View style={styles.button}>
          <Text style={styles.textButton}>Absen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  input: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginTop: 10,
  },
  button: {
    width: 300,
    height: 45,
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#1B1B32',
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    color: '#FFF',
  },
});

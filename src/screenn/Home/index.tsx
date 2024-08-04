import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import {Participant} from "../../components/Participant";

export default function Home() {
  const participants = ['Danrlei']

  function handleAddParticipant() {

  }

  function handleRemoveParticipant() {
    console.log('participant remove')
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Name participant'/>
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.textButton}>add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        renderItem={({item}) => (
          <Participant name={item} onRemove={handleRemoveParticipant}/>
        )}
      />
      <ExpoStatusBar/>
    </View>
  );
}
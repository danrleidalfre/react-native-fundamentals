import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function Home() {
  function handleAddParticipant() {
    console.log('btn clicked')
  }

  return (
    <View style={styles.container}>
      <Text>Add Participants to Event</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder='Name participant'/>
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      <ExpoStatusBar/>
    </View>
  );
}
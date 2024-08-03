import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map(participant => (
          <Participant key={participant} name={participant} onRemove={handleRemoveParticipant}/>
        ))}
      </ScrollView>
      <ExpoStatusBar/>
    </View>
  );
}
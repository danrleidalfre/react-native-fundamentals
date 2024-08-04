import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import {Participant} from "../../components/Participant";

export default function Home() {
  const participants = ['Danrlei']

  function handleAddParticipant() {
    Alert.alert('Novo', 'Adicionando novo')
  }

  function handleRemoveParticipant() {
    Alert.alert('Remover Participante', 'Tem certeza que deseja remover esse participante?', [
      {
        text: 'Sim',
        onPress: () => onDelete()
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  function onDelete() {
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
    </View>
  );
}
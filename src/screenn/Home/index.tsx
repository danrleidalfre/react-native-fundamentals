import {Alert, FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from "./styles";
import {Participant} from "../../components/Participant";
import {useState} from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [name, setName] = useState<string>('')

  function handleAddParticipant() {
    if (!name) {
      return
    }

    if (participants.includes(name)) {
      return Alert.alert('Participante já adicionado')
    }

    setParticipants(prevState => [name, ...prevState])
    setName('')
  }

  function handleRemoveParticipant() {
    Alert.alert('Remover Participante', 'Tem certeza que deseja remover esse participante?', [
      {text: 'Sim', onPress: () => onDelete()},
      {text: 'Não', style: 'cancel'}
    ])
  }

  function onDelete() {
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder='Nome do participante'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddParticipant}
        >
          <Text style={styles.textButton}>add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant name={item} onRemove={handleRemoveParticipant}/>
        )}
      />
    </View>
  );
}
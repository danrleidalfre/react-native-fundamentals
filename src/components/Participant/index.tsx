import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";

type Props = {
  name: string
  onRemove: () => void
}

export function Participant({name, onRemove}: Props) {
  function handleRemoveParticipant() {
    console.log('participant remove')
  }

  return (
    <View style={styles.participant}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.remove} onPress={onRemove}>
        <Text style={styles.textRemove}>remover</Text>
      </TouchableOpacity>
    </View>
  )
}
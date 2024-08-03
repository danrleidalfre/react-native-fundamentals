import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  participant: {
    width: '100%',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#eee',
    height: 40,
    borderRadius: 10,
    marginTop: 10,

  },
  name: {
    fontWeight: 'semibold',
    fontSize: 20,
  },
  remove: {},
  textRemove: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'semibold',
  }
})
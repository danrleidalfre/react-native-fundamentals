import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    width: '90%',
    margin: "auto",
  },
  form: {
    width: '100%',
    flexDirection: "row",
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    padding: 10,
    borderColor: '#ccc',
    height: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#ccc',
    height: 40,
    width: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
  }
});

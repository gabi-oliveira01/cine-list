import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Botao({ texto, onPress }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#E50914",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 5,
  },

  texto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
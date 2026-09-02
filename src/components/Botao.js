import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Play } from "lucide-react-native"; 

export default function Botao({ texto, onPress, icone = false }) {
  return (
    <TouchableOpacity 
      style={styles.botao} 
      onPress={onPress}
      activeOpacity={0.8} 
    >
      {icone && <Play size={20} color="#FFFFFF" style={styles.icone} />}
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#f044d9",
    padding: 14, 
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 8, 
    elevation: 3, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  texto: {
    color: "#0b0303",
    fontSize: 16,
    fontWeight: "bold",
  },
 
  icone: {
    marginRight: 8, 
  },
});

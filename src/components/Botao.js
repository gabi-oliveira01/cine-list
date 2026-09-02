import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Play } from "lucide-react-native"; 

export default function Botao({ texto, onPress, icone = false }) {
  return (
    <TouchableOpacity 
      style={styles.botao} 
      onPress={onPress}
      activeOpacity={0.8} // Adicionado: controla a transparência ao clicar
    >
      {icone && <Play size={20} color="#FFFFFF" style={styles.icone} />}
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#E50914",
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
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
 
  icone: {
    marginRight: 8, 
  },
});

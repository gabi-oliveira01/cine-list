import { View, Text, StyleSheet } from "react-native";
import Botao from "./Botao";

export default function FilmeItem({
  filme,
  aoAlternarAssistido,
  aoExcluir,
  aoEditar,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        {filme.assistido ? "✓ " : "○ "}
        {filme.titulo}
      </Text>

      <Text style={styles.categoria}>
        Categoria: {filme.categoria}
      </Text>

      <Text style={styles.status}>
        Status: {filme.assistido ? "Assistido" : "Quero assistir"}
      </Text>

      <Botao
        texto={filme.assistido ? "Marcar como não assistido" : "Marcar como assistido"}
        onPress={() => aoAlternarAssistido(filme.id)}
      />

      <Botao
        texto="Editar"
        onPress={() => aoEditar(filme)}
      />

      <Botao
        texto="Excluir"
        onPress={() => aoExcluir(filme.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
  },

  categoria: {
    fontSize: 16,
    marginTop: 5,
  },

  status: {
    fontSize: 14,
    marginTop: 5,
    marginBottom: 8,
  },
});
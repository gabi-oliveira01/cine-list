import { View, Text, StyleSheet } from "react-native";

import Botao from "./Botao";

export default function FilmeItem({
  filme,
  aoAlternarAssistido,
  aoExcluir,
  aoEditar,
}) {
  const status = filme.assistido ? "Assistido" : "Quero assistir";
  const textoBotao = filme.assistido
    ? "Marcar como não assistido"
    : "Marcar como assistido";

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
        Status: {status}
      </Text>

      <Botao
        texto={textoBotao}
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
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import FilmeItem from "../components/FilmeItem";
import Botao from "../components/Botao";

export default function ListaFilmesScreen() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [filmes, setFilmes] = useState([]);
  const [filmeEditando, setFilmeEditando] = useState(null);

  useEffect(() => {
    carregarFilmes();
  }, []);

  async function carregarFilmes() {
    try {
      const filmesSalvos = await AsyncStorage.getItem("@filmes");

      if (filmesSalvos !== null) {
        setFilmes(JSON.parse(filmesSalvos));
      }
    } catch (erro) {
      console.log("Erro ao carregar filmes:", erro);
    }
  }

  async function salvarFilmes(novosFilmes) {
    try {
      setFilmes(novosFilmes);

      await AsyncStorage.setItem(
        "@filmes",
        JSON.stringify(novosFilmes)
      );
    } catch (erro) {
      console.log("Erro ao salvar filmes:", erro);
    }
  }

  function adicionarFilme() {
    if (titulo.trim() === "" || categoria.trim() === "") {
      return;
    }

    const novoFilme = {
      id: Date.now().toString(),
      titulo: titulo,
      categoria: categoria,
      assistido: false,
    };

    const novosFilmes = [...filmes, novoFilme];

    salvarFilmes(novosFilmes);

    setTitulo("");
    setCategoria("");
  }

  function alternarAssistido(id) {
    const novosFilmes = filmes.map((filme) => {
      if (filme.id === id) {
        return {
          ...filme,
          assistido: !filme.assistido,
        };
      }

      return filme;
    });

    salvarFilmes(novosFilmes);
  }

  function excluirFilme(id) {
    const novosFilmes = filmes.filter(
      (filme) => filme.id !== id
    );

    salvarFilmes(novosFilmes);
  }

  function iniciarEdicao(filme) {
    setTitulo(filme.titulo);
    setCategoria(filme.categoria);
    setFilmeEditando(filme);
  }

  function salvarEdicao() {
    if (titulo.trim() === "" || categoria.trim() === "") {
      return;
    }

    const novosFilmes = filmes.map((filme) => {
      if (filme.id === filmeEditando.id) {
        return {
          ...filme,
          titulo: titulo,
          categoria: categoria,
        };
      }

      return filme;
    });

    salvarFilmes(novosFilmes);

    setTitulo("");
    setCategoria("");
    setFilmeEditando(null);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🎬 Cine List</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do filme"
        value={titulo}
        onChangeText={setTitulo}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      {filmeEditando ? (
        <Botao
          texto="Salvar edição"
          onPress={salvarEdicao}
        />
      ) : (
        <Botao
          texto="Adicionar filme"
          onPress={adicionarFilme}
        />
      )}

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FilmeItem
            filme={item}
            aoAlternarAssistido={alternarAssistido}
            aoExcluir={excluirFilme}
            aoEditar={iniciarEdicao}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vazio}>
            Nenhum filme cadastrado.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#FFFFFF",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    fontSize: 16,
  },

  vazio: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
  },
});
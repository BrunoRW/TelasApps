import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function TelaA() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Tela A</Text>
        <Link style={styles.link} href="/telaB">Ir para Tela B</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: "center"
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  link: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    padding: 5,
    borderRadius: 5,
    width: "fit-content"
  },
});

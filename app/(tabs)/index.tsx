import { Image, View, Text } from "react-native";

const nombre1 = "Steven";
const nombre2 = "Emilio";
const nombre3 = "Lilio";
export default function HomeScreen() {
  return (
    <View>
      <Text>hola {`${nombre1}, ${nombre2}, ${nombre3}`}</Text>
    </View>
  );
}

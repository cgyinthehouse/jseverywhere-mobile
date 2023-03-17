import { Text, View, Button } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"

type RootStackRaramList = {
  Home: undefined
  MyNotes: { userId: string }
  Feed: undefined
  Favorites: { userId: string }
  Note: undefined
}
type Props = StackScreenProps<RootStackRaramList, "Favorites">

export default function Favorites({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Favorites</Text>
      <Button title="Go to note" onPress={() => navigation.navigate("Note")} />
    </View>
  )
}

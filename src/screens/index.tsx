import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"

import Feed from "./feed"
import Favorites from "./favorite"
import MyNotes from "./mynotes"
import NoteScreen from "./note"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const FeedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Note" component={NoteScreen} />
    </Stack.Navigator>
  )
}
const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyNotes" component={MyNotes} />
      <Stack.Screen name="Note" component={NoteScreen} />
    </Stack.Navigator>
  )
}
const FavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="Note" component={NoteScreen} />
    </Stack.Navigator>
  )
}
export default function Screens() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Favorites" component={FavStack} />
        <Tab.Screen name="Feed" component={FeedStack} />
        <Tab.Screen name="MyNotes" component={MyStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

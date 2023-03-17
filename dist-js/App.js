"use strict";
exports.__esModule = true;
var native_1 = require("@react-navigation/native");
var stack_1 = require("@react-navigation/stack");
var react_native_1 = require("react-native");
var Stack = stack_1.createStackNavigator();
function HomeScreen() {
    return (<react_native_1.View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <react_native_1.Text>Home Screen</react_native_1.Text>
      </react_native_1.View>);
}
function App() {
    return (<native_1.NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
          </Stack.Navigator>
        </native_1.NavigationContainer>);
}
exports["default"] = App;

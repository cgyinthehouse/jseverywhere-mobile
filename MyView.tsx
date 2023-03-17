import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Person } from './Person';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export class MyView extends React.Component<any>{
    person: Person;
    styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
    });

    constructor(person: Person) {
        super(person);
        this.person = person;
    }
    render() {
        return (
          <View style={this.styles.container}>
            <Text>This is a Person view of {this.person.firstName} {this.person.lastName}.</Text>
            <StatusBar style="auto" />
          </View>
          )
    }
}
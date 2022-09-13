import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/dashboard/Home'
import PromptGenerator from './components/prompt_generator/PromptGenerator'
import SettingContainer from './components/settings/SettingContainer'

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PromptGenerator" component={PromptGenerator} />
        <Stack.Screen name="SettingContainer" component={SettingContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

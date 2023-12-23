import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import ManageExpense from './screens/ManageExpense';
import RecentExpense from './screens/RecentExpense';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';


const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.primary
        },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary },
        tabBarActiveTintColor: GlobalStyles.colors.info,
      }}
    >
      <BottomTabs.Screen
        name="RecentExpense"
        component={RecentExpense}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass-sharp" size={size} color={color} />
          ),
        }}
      />

      <BottomTabs.Screen
        name="AllExpense"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}


export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen
            name="ManageExpense"
            component={ManageExpense}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen name="ExpensesOverview" component={ExpensesOverview} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

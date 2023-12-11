import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AnnualLog from "./components/AnnualLog";
import DailyLog from "./components/DailyLog";
import Map from "./components/Map";
import MonthlyLog from "./components/MonthlyLog";
import TableStats from "./components/TableStats";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='DailyLog'>
        <Stack.Screen
          name='Map'
          component={Map}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='AnnualLog'
          component={AnnualLog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='DailyLog'
          component={DailyLog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='MonthlyLog'
          component={MonthlyLog}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='TableStats'
          component={TableStats}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

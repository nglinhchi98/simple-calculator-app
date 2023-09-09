
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen'
import HistoryScreen from './HistoryScreen'
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Calculator") {
              iconName = 'ios-calculator';}
              else if (route.name === "History") {
                iconName = 'ios-list';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}>
        <Tab.Screen name='Calculator' component={HomeScreen} />
        <Tab.Screen name='History' component={HistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
);
}

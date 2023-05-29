import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Welcome from './views/welcome';
import MemberSign from './views/membersign';
import HomeView from './views/home';
import ExerciseView from './views/exercise';
import MedicineView from './views/medicine';
import ProfileView from './views/profile';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import 'moment/locale/tr';

moment.locale('tr');

const Tab = createBottomTabNavigator();

//TabScreen düzenlemeleri
function TabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: '#48cfb8',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: 'black',
        tabBarItemStyle: {
          borderRightWidth: 0.3,
          borderLeftWidth: 0.3,
        },
        tabBarStyle: {
          height: 50,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Exercise"
        component={ExerciseView}
        options={{
          tabBarIcon: ({color}) => <Icon name="run" size={30} color={color} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIcon: ({color}) => (
            <Icon2 name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicine"
        component={MedicineView}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {borderWidth: 0.5},
          tabBarIcon: ({color}) => <Icon name="pill" size={30} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

const GirisStack = createNativeStackNavigator();

function GirisScreen() {
  return (
    <GirisStack.Navigator screenOptions={{headerShown: false}}>
      <GirisStack.Screen name="WelcomeScreen" component={Welcome} />
      <GirisStack.Screen name="MemberSignScreen" component={MemberSign} />
      <GirisStack.Screen name="HomeScreen" component={HomeView} />
    </GirisStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //diğer stack screen ile üst üste gelmesin diye headerShown : false yaptık
    //farklı viewlerden alırken componentlere dikkat edelim
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="GirisScreen" component={GirisScreen} />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileView}
          options={{headerShown: true}}
        />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

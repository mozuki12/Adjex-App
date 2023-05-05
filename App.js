import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Home from './components/Home';
import Search from './components/Search';
import Tutorial from './components/Tutorial';
import Quiz from './components/Quiz';
import Certificate from './components/Certificate';
import Quiz1 from './components/Quiz1';
import Quiz2 from './components/Quiz2';
import Quiz3 from './components/Quiz3';
import Quiz4 from './components/Quiz4';
import Quiz5 from './components/Quiz5';
import Alert from './components/Alert';
import Congrats from './components/Congrats';
import About from './components/About';
import Report from './components/Report';
import Bahasa  from './components/Bahasa';
import DetailKata from './components/DetailKata';
import Admin from './components/Admin';
import AddKata from './components/AddKata';
import EditKata from './components/EditKata';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="EditKata" component={EditKata}/>
        <Stack.Screen name="AddKata" component={AddKata}/>
        <Stack.Screen name="Admin" component={Admin}/>
        <Stack.Screen name="DetailKata" component={DetailKata}/>
        <Stack.Screen name="Bahasa" component={Bahasa}/>
        <Stack.Screen name="Report" component={Report}/>
        <Stack.Screen name="About" component={About}/>
        <Stack.Screen name="Quiz5" component={Quiz5}/>
        <Stack.Screen name="Quiz4" component={Quiz4}/>
        <Stack.Screen name="Quiz3" component={Quiz3}/>
        <Stack.Screen name="Quiz2" component={Quiz2}/>
        <Stack.Screen name="Quiz1" component={Quiz1}/>
        <Stack.Screen name="Congrats" component={Congrats}/>
        <Stack.Screen name="Alert" component={Alert}/>
        <Stack.Screen name="Quiz" component={Quiz}/>
        <Stack.Screen name="Certificate" component={Certificate}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Tutorial" component={Tutorial}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

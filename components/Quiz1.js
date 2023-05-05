import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  SocialIcon,
  ImageBackground,
  ScrollView
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LOGO.jpg')} />
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 25, marginTop: 10, marginLeft: 90, fontWeight: 'bold', color: 'white', }}>Quiz</Text>
      <Text style={{ fontSize: 25, marginTop: 10, marginLeft: 5, fontWeight: 'bold', color: 'white', }}>1</Text>
      </View>
      <View style={styles.card}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 15, marginTop: 15, fontWeight: 'bold', color: 'black', marginLeft: 45, }}>The topic of the passage is…</Text>
      <Text style={{ fontSize: 15, marginTop: 15,  fontWeight: 'bold', color: 'black', }}>?</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Alert')}>
      <View style={styles.card1}>      
      <Text style={{ fontSize: 15, marginTop: 25, marginLeft: 55, fontWeight: 'bold' }}>The static atmosphere</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Alert')}>
      <View style={styles.card1}>      
      <Text style={{ fontSize: 15, marginTop: 25, marginLeft: 28, fontWeight: 'bold' }}>The change in the atmosphere</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz2')}>
      <View style={styles.card1}>
      <Text style={{ fontSize: 15, marginTop: 25, marginLeft: 25, fontWeight: 'bold' }}>The earth’s original atmosphere</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.tombol}>
      <View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Image style={{width: 35, height: 35, marginLeft: 30, marginTop: 10,}} source={require('../assets/homeicon-removebg-preview.png')} />
      </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Image style={{width: 55, height: 55, marginTop: 3, marginLeft: 60,}} source={require('../assets/free-search-icon-free-vector-removebg-preview.png')}  />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image style={{width: 35, height: 35, marginLeft: 60, marginTop: 10,}} source={require('../assets/profile3-removebg-preview.png')} />
      </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: '#1C3144',
  },
  card: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 400,
    width: 300,
    borderRadius: 10,
    alignSelf: 'center'
  },
  logo: {
    height: 90,
    width: 270,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  tombol: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 60,
    width: 300,
    borderRadius: 10,
    alignSelf: 'center'
  },
  card1: {
    marginTop: 40,
    backgroundColor: '#F2E38B',
    height: 70,
    width: 270,
    borderRadius: 10,
    alignSelf: 'center'
  },
});

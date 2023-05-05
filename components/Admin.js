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
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LOGO.jpg')} />
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
      <Image style={{width: 20, height: 20, marginLeft: -10, marginBottom: 10,}} source={require('../assets/bakiicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{fontSize: 17, marginLeft: 70, color: 'white', fontWeight: 'bold',}}> ADMIN </Text>
      <TouchableOpacity style={{width: 40, height: 25, borderRadius: 5, marginLeft: 60, backgroundColor: '#FAC952'}} onPress={() => navigation.navigate('AddKata')}>
      <Text style={{fontWeight: 'bold', marginLeft: 5, marginTop: 2,}}>Add</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.card}>
      <View>
      <View style={{
          marginTop: 20,
          backgroundColor: '#1C3144',
          height: 55,
          width: 270,
          borderRadius: 10,
          alignSelf: 'center'}}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 17, marginTop: 15, marginLeft: 20, fontWeight: 'bold', color: 'white', alignSelf: 'center' }}>Jealous</Text>
      <TouchableOpacity style={{marginTop: 15, width: 40, height: 25, borderRadius: 5, marginLeft: 70, backgroundColor: 'lightgrey'}} onPress={() => navigation.navigate('EditKata')}>
      <Text style={{fontWeight: 'bold', marginLeft: 7, marginTop: 2,}}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 15, width: 50, height: 25, borderRadius: 5, marginLeft: 15, backgroundColor: 'red'}}>
      <Text style={{fontWeight: 'bold', marginLeft: 3, marginTop: 2,}}>Delete</Text>
      </TouchableOpacity>
      </View>
      </View>
      </View>
      </View>
      <View style={styles.tombol}>
      <View style={{flexDirection:'row'}}>
<TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Image style={{width: 35, height: 35, marginLeft: 30, marginTop: 10,}} source={require('../assets/homeicon-removebg-preview.png')}/>
      </TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('Search')}>
      <Image style={{width: 55, height: 55, marginTop: 3, marginLeft: 60,}} source={require('../assets/free-search-icon-free-vector-removebg-preview.png')} />
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
    marginTop: 10,
    backgroundColor: 'white',
    height: 500,
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
});

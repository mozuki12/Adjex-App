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
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Image style={{width: 25, height: 25, marginLeft: -10, marginTop: 10,}} source={require('../assets/bakiicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 50, fontWeight: 'bold', color: 'white', }}>Tutorial</Text>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10, fontWeight: 'bold', color: 'white' }}>Video</Text>
      </View>
      <View style={styles.card}>
      <View style={styles.card1}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{width: 45, height: 45, backgroundColor: 'darkblue',marginTop: 12, marginLeft: 10, borderRadius: 5,}}>
      <Image style={{width: 25, height: 25, marginLeft: 12, marginTop: 10,}} source={require('../assets/playicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Video</Text>
      <Text style={{ fontSize: 10, marginTop: 40, marginLeft: 100, }}>02.00</Text>
      </View>
      </View>
      <View style={styles.card1}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{width: 45, height: 45, backgroundColor: 'darkblue',marginTop: 12, marginLeft: 10, borderRadius: 5,}}>
      <Image style={{width: 25, height: 25, marginLeft: 12, marginTop: 10,}} source={require('../assets/playicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Video</Text>
      <Text style={{ fontSize: 10, marginTop: 40, marginLeft: 100, }}>02.00</Text>
      </View>
      </View>
      <View style={styles.card1}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{width: 45, height: 45, backgroundColor: 'darkblue',marginTop: 12, marginLeft: 10, borderRadius: 5,}}>
      <Image style={{width: 25, height: 25, marginLeft: 12, marginTop: 10,}} source={require('../assets/playicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Video</Text>
      <Text style={{ fontSize: 10, marginTop: 40, marginLeft: 100, }}>02.00</Text>
      </View>
      </View>
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
    backgroundColor: '#F2F2F2',
    height: 70,
    width: 270,
    borderRadius: 10,
    alignSelf: 'center'
  },
});

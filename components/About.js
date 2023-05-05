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
      <Image style={{width: 20, height: 20, marginLeft: -20, marginBottom: 10,}} source={require('../assets/bakiicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{fontSize: 17, marginLeft: 20, color: 'white', fontWeight: 'bold',}}> TENTANG KAMI </Text>
      </View>
      <View style={styles.card}>
      <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30, fontWeight: 'bold'}}>About Us</Text>
      <Text style={{color: 'black', margin: 10, padding: 10,}}>Kami adalah penyedia sebuah layanan yang bergerak dalam bidang pendidikan, dengan di buat nya aplikasi ini semoga bisa berguna untuk bisa belajar kata adjective dimana pun dan kapan pun</Text>
      <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30, fontWeight: 'bold'}}>Team</Text>
      <Text style={{color: 'black', margin: 10, padding: 10,}}>Dalam pembuatan aplikasi ini tidak luput dari kerja keras nya team kami yang beranggotakan :</Text>
      <Text style={{color: 'black', marginLeft: 20,}}>-Andika Neviantoro</Text>
      <Text style={{color: 'black', marginLeft: 20,}}>-Apri Pandu Wicaksono</Text>
      <Text style={{color: 'black', marginLeft: 20,}}>-Akmal</Text>
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
    marginTop: 10,
    backgroundColor: 'white',
    height: 500,
    width: 300,
    borderRadius: 10,
    alignSelf: 'center'
  },
  card1: {
    marginTop: 10,
    backgroundColor: '#FAC952',
    height: 45,
    width: 270,
    borderRadius: 10,
    alignSelf: 'center'
  },
  card2: {
    marginTop: 10,
    backgroundColor: '#C62E2E',
    height: 45,
    width: 270,
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

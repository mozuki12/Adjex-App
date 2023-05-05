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
      <View style={styles.card}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width: 70, height: 70, marginLeft: 10, marginTop: 10,}} source={require('../assets/profile1.png')} />
      <Text style={{fontSize: 20, marginLeft: 10, marginTop: 30, fontWeight: 'bold'}}>Benjamin4K</Text>
      </View>
      <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30, fontWeight: 'bold'}}>Akun</Text>
      <View style={styles.card1}>
      <TouchableOpacity onPress={() => navigation.navigate('Bahasa')}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10, }}>Pilih</Text>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 5, }}>Bahasa</Text>
      <Image style={{width: 20, height: 20, marginLeft: 140, marginTop: 12,}} source={require('../assets/iconmext-removebg-preview.png')} />
      </View>
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <View style={styles.card2}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10, color: 'white',}}>Log</Text>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 5, color: 'white',}}>Out</Text>
      <Image style={{width: 20, height: 20, marginLeft: 170, marginTop: 12,}} source={require('../assets/iconmext-removebg-preview.png')} />
      </View>
      </View>
      </TouchableOpacity>
      <Text style={{fontSize: 20, marginLeft: 20, marginTop: 20, fontWeight: 'bold'}}>System</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Report')}>
      <View style={styles.card1}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10, }}>Laporan</Text>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 5, }}>Bug</Text>
      <Image style={{width: 20, height: 20, marginLeft: 137, marginTop: 12,}} source={require('../assets/iconmext-removebg-preview.png')} />
      </View>
      </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('About')}>
      <View style={styles.card1}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10, }}>Tentang</Text>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 5, }}>Kami</Text>
      <Image style={{width: 20, height: 20, marginLeft: 130, marginTop: 12,}} source={require('../assets/iconmext-removebg-preview.png')} />
      </View>
      </View>
      </TouchableOpacity>
      <Text style={{fontSize: 20, marginLeft: 20, marginTop: 20, fontWeight: 'bold'}}>Admin</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Admin')}>
      <View style={{
        marginTop: 10,
        backgroundColor: '#FAC952',
        height: 45,
        width: 270,
        borderRadius: 10,
        alignSelf: 'center'
        }}>
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 17, marginTop: 10, marginLeft: 10, }}>Adjex</Text>
      <Image style={{width: 20, height: 20, marginLeft: 190, marginTop: 12,}} source={require('../assets/iconmext-removebg-preview.png')} />
      </View>
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
      <Image style={{width: 35, height: 35, marginLeft: 60, marginTop: 10,}} source={require('../assets/profile3-removebg-preview.png')} />
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
    height: 550,
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

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
      <Text style={{fontSize: 17, marginLeft: 20, color: 'white', fontWeight: 'bold',}}> LAPORAN BUG </Text>
      </View>
      <View style={styles.card}>
      <Text style={{fontSize: 15, marginLeft: 20, marginTop: 30, fontWeight: 'bold'}}>GANGGUAN YANG DIALAMI</Text>
      <TextInput style={{ marginTop: 20, borderRadius: 5, borderWidth: 1, height: 40, width: 260, marginLeft: 20, padding: 10, borderColor: '#ccc', }} placeholder="Ketik Disini"></TextInput>
      <Text style={{fontSize: 13, marginLeft: 21, marginTop: 30, fontWeight: 'bold'}}>DETAIL GANGGUAN/ MASALAH</Text>
      <TextInput
        style={{marginTop: 20, marginLeft: 20, borderColor: '#ccc', borderWidth: 1,borderRadius: 10, fontSize: 13, height: 200, width: 260, backgroundColor: 'none', padding: 10,}}
        placeholder="Ketik disini secara detail"
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={{marginTop: 70, marginLeft: 220,}} onPress={() => navigation.navigate('')}>
      <Text style={{color: 'black', fontSize: 12, fontWeight: 'bold'}}>SUBMIT</Text>
      </TouchableOpacity>
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
  cardtext: {
    marginTop: 10,
    marginLeft: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    height: 100,
    width: 260,
    backgroundColor: 'none'
  },
});

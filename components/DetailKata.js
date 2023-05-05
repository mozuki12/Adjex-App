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
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image style={{width: 20, height: 20, marginLeft: -20, marginBottom: 10,}} source={require('../assets/bakiicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{fontSize: 17, marginLeft: 20, color: 'white', fontWeight: 'bold',}}> JEALOUS </Text>
      </View>
      <View style={styles.card}>
      <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30, fontWeight: 'bold'}}>Descirption</Text>
      <Text style={{color: 'black', margin: 10, padding: 10,}}>Kata jealous sering digunakan ketika kita tidak suka ada orang lain yang menunjukkan ketertarikan pada pasangan, atau sebaliknya. Selain itu, jealous juga bisa digunakan ketika seorang anak tidak suka orangtuanya lebih menyayangi anak yang lain.</Text>
      <Text style={{fontSize: 20, marginLeft: 20, marginTop: 30, fontWeight: 'bold'}}>Example</Text>
      <Text style={{color: 'black', margin: 10, padding: 10,}}>Berikut ini beberapa contoh penggunaan kata dari kata jealous :</Text>
      <Text style={{color: 'black', marginLeft: 20,}}>-He jealous that you're going to the vacation!</Text>
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

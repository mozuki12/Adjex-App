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
      <Text style={{color: 'white', marginTop: 20, fontSize: 25, fontWeight: 'bold', marginLeft: -25}}> DASHBOARD </Text>
      <View style={styles.tombo2}>
      <View style={{flexDirection:'row',}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image style={styles.card1} source={require('../assets/homescreen.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Tutorial')}>
      <Image style={styles.card2} source={require('../assets/undraw_Teacher_re_sico.png')} />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={{marginLeft: 30}}>Home Screen</Text>
      <Text style={{marginLeft: 85}}>Tutorial</Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
      <Image style={styles.card3} source={require('../assets/undraw_Questions_re_1fy7.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Certificate')}>
      <Image style={styles.card4} source={require('../assets/undraw_Certificate_re_yadi.png')} />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row'}}>
      <Text style={{marginLeft: 55}}>Quiz</Text>
      <Text style={{marginLeft: 110}}>Certificate</Text>
      </View>
      </View>
      <View style={styles.tombol}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width: 35, height: 35, marginLeft: 30, marginTop: 10,}} source={require('../assets/homeicon-removebg-preview.png')} />
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

  card1: {
    padding: 50,
    margin: 25,
    marginTop: 20,
    backgroundColor: '#F2F0FB',
    height: 100,
    width: 100,
    borderRadius: 10,
    alignSelf: 'center'
  },
  card2: {
    padding: 50,
    margin: 25,
    marginTop: 20,
    backgroundColor: '#F2F0FB',
    height: 100,
    width: 100,
    borderRadius: 10,
    alignSelf: 'center'
  },
  card3: {
    padding: 50,
    margin: 25,
    marginTop: 25,
    backgroundColor: '#F2F0FB',
    height: 100,
    width: 100,
    borderRadius: 10,
    alignSelf: 'center'
  },
  card4: {
    padding: 50,
    margin: 25,
    marginTop: 25,
    backgroundColor: '#F2F0FB',
    height: 100,
    width: 100,
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
  tombo2: {
    marginTop: 20,
    backgroundColor: 'white',
    height: 400,
    width: 300,
    borderRadius: 10,
    alignSelf: 'center'
  },
});

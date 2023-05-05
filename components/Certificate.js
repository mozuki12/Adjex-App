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
      <View style={styles.tombo2}>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Image style={{width: 25, height: 25, marginLeft: 10, marginTop: 20,}} source={require('../assets/backicon-removebg-preview.png')} />
      </TouchableOpacity>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 70, fontWeight: 'bold', color: 'black', }}>Certificate</Text>
      </View>
      <View style={{flexDirection:'row', flexWrap: 'wrap'}}>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => navigation.navigate('')}>
      <Image style={{width: 120, height: 80, marginTop: 20, marginLeft: 20,}} source={require('../assets/sertifikat.png')}/>
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
  logo: {
    height: 90,
    width: 270,
    marginBottom: 10,
    borderRadius: 5,
    alignSelf: 'center',
  },
  tombo2: {
    marginTop: 20,
    backgroundColor: 'darkgrey',
    height: 700,
    width: 300,
    borderRadius: 10,
    alignSelf: 'center'
  },
});

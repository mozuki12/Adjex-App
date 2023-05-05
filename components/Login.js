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
      <Text style={styles.paragraph}> LOGIN</Text>
      <Text style={styles.paragraph2}> Enter your details to login </Text>
      <TextInput style={styles.input} placeholder="username/email" />
      <TextInput style={styles.input2} placeholder="password" />
      <TouchableOpacity style={styles.lupa_anu}>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tombol}>
        <Text onPress={() => navigation.navigate('Home')} style={styles.logintext}> Log In </Text>
      </TouchableOpacity>
      <Text style={styles.notice}>
        Dont have account?
        <TouchableOpacity style={styles.tombol2}>
          <Text onPress={() => navigation.navigate('Register')}  style={styles.daftar}> Register </Text>
        </TouchableOpacity>
      </Text>
      <TouchableOpacity style={styles.butonBack}>
      <Text onPress={() => navigation.navigate('Home')} style={styles.dashboardtext}> Back to Dashboard </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: 'white',
  },
  dashboardtext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  butonBack: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  paragraph: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'left'

  },
  paragraph2: {
    marginTop: 5,
    margin: 5,
    fontSize: 15,
    alignSelf: 'left'

  },
  input: {
    height: 45,
    margin: 12,
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  input2: {
    height: 45,
    margin: 12,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  notice: {
    margin: 31,
    marginTop: 1,
    padding: 10,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tombol: {
    marginTop: 200,
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  logintext: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  tombol2: {},
  daftar: {
    color: 'darkblue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // begron: {
  //   marginTop: 200,
  //   backgroundColor: 'white',
  // },
  lupa_anu: {
    margin: 0,
    padding: 5,
  },
});

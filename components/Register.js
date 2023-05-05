import * as React from 'react';
import { useState } from 'react';
import {Text,Image, View, TextInput, Button, StyleSheet, TouchableOpacity, Modal} from 'react-native';


function regis(pppp) {
  return <TextInput style={styles.input} placeholder={pppp}></TextInput>
}

export default function register({navigation}) {
  return(
    <View style={styles.container}>
    <Text style={styles.paragraph}> REGISTER </Text>
      <Text style={styles.paragraph2}> Enter your details to Register </Text>
      {regis("username")}
      {regis("email/no hp")}
      {regis("password")}
      {regis("confrim password")}
      <TouchableOpacity  style={styles.daftar} onPress={() => setModalVisible(true)} >
      <Text style={styles.teks}> REGISTER </Text>
      </TouchableOpacity>
      <Text style={styles.notice}>
        Alredy have account?
        <TouchableOpacity style={styles.tombol2}>
          <Text onPress={() => navigation.navigate('Login')}  style={styles.daftar1}> Login </Text>
        </TouchableOpacity>
      </Text>
      <TouchableOpacity style={styles.butonBack}>
      <Text onPress={() => navigation.navigate('Home')} style={styles.dashboardtext}> Back to Dashboard </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: 'white',
  },
  butonBack: {
    marginTop: 20,
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  dashboardtext: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
  },
  daftar1: {
    color: 'darkblue',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  notice: {
    margin: 31,
    marginTop: 1,
    padding: 10,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: 'bold',
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
    alignSelf: 'left',
    marginBottom: 50,
  },
  input: {
    marginTop: 20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },

  daftar: {
    marginTop: 150,
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  teks: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
})
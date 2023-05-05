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
  ScrollView
} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LOGO.jpg')} />
      <View style={{flexDirection:'row'}}>
      <Text style={{ fontSize: 25, marginTop: 10, marginLeft: 5, fontWeight: 'bold', color: 'white', }}>Quiz</Text>
      </View>
      <View style={styles.card}>
      <ScrollView style={styles.container}>

      <View style={styles.card1}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz1')}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width: 35, height: 35, marginLeft: 12, marginTop: 16,}} source={require('../assets/quizicon.png')} />
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Quiz</Text>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 5, fontWeight: 'bold' }}>1</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.card1}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz2')}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width: 35, height: 35, marginLeft: 12, marginTop: 16,}} source={require('../assets/quizicon.png')} />
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Quiz</Text>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 5, fontWeight: 'bold' }}>2</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.card1}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz3')}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width: 35, height: 35, marginLeft: 12, marginTop: 16,}} source={require('../assets/quizicon.png')} />
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Quiz</Text>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 5, fontWeight: 'bold' }}>3</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.card1}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz4')}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width: 35, height: 35, marginLeft: 12, marginTop: 16,}} source={require('../assets/quizicon.png')} />
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Quiz</Text>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 5, fontWeight: 'bold' }}>4</Text>
      </View>
      </TouchableOpacity>
      </View>
      <View style={styles.card1}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz5')}>
      <View style={{flexDirection:'row'}}>
      <Image style={{width: 35, height: 35, marginLeft: 12, marginTop: 16,}} source={require('../assets/quizicon.png')} />
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 20, fontWeight: 'bold' }}>Quiz</Text>
      <Text style={{ fontSize: 17, marginTop: 20, marginLeft: 5, fontWeight: 'bold' }}>5</Text>
      </View>
      </TouchableOpacity>
      </View>
      </ScrollView>
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
    backgroundColor: '#F2E38B',
    height: 70,
    width: 270,
    borderRadius: 10,
    alignSelf: 'center'
  },
});

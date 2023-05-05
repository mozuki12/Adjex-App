import * as React from 'react';
import { useEffect, useState } from 'react';
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
  ScrollView,
  ActivityIndicator,
} from 'react-native';

export default function Login({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    };
    fetchData();
  }, []);

  return (
    <>
    {isLoading && (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingContainer} />
      )}
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/LOGO.jpg')} />
      <View style={styles.card}>
        <ScrollView style={styles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailKata')}>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.card1}>
              <View style={{ flexDirection: 'row' }}>
                <Image
                  style={{
                    width: 45,
                    height: 45,
                    marginLeft: 10,
                    marginTop: 1 / 2,
                  }}
                  source={require('../assets/buku-removebg-preview.png')}
                />
                <Text
                  style={{
                    fontSize: 17,
                    marginTop: 10,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Jealous
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.tombol}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Image
              style={{
                width: 35,
                height: 35,
                marginLeft: 30,
                marginTop: 10,
              }}
              source={require('../assets/homeicon-removebg-preview.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Image
              style={{
                width: 55,
                height: 55,
                marginTop: 3,
                marginLeft: 60,
              }}
              source={require('../assets/free-search-icon-free-vector-removebg-preview.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              style={{
                width: 35,
                height: 35,
                marginLeft: 60,
                marginTop: 10,
              }}
              source={require('../assets/profile3-removebg-preview.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
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
    alignSelf: 'center',
  },
  card1: {
    marginTop: 40,
    backgroundColor: '#FAC952',
    height: 50,
    width: 270,
    borderRadius: 10,
    alignSelf: 'center',
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
    alignSelf: 'center',
  },
  loadingContainer: {
    marginBottom: -100,
    padding: 35,
    height: 820,
    width: 500,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    zIndex: 1,
    position: 'absolute',
    blurRadius: 3,
  },
});

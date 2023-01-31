import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome5';

// import DaftarBarang from './DaftarBarang';

const BerandaScreen = props => {
  const [dataBarang, getDataBarng] = useState([
    {
      nama: 'Bunga 1',
      gambar: require('./src/bunga1.png'),
      harga: 'Rp. 25.000',
    },
    {
      nama: 'Bunga 2',
      gambar: require('./src/bunga2.png'),
      harga: 'Rp. 30.000',
    },
    {
      nama: 'Bunga 3',
      gambar: require('./src/bunga3.png'),
      harga: 'Rp. 20.000',
    },
    {
      nama: 'Bunga 4',
      gambar: require('./src/bunga4.png'),
      harga: 'Rp. 20.000',
    },
    {
      nama: 'Bunga 5',
      gambar: require('./src/bunga5.png'),
      harga: 'Rp. 20.000',
    },
    {
      nama: 'Bunga 6',
      gambar: require('./src/bunga6.png'),
      harga: 'Rp. 20.000',
    },
    {
      nama: 'Bunga 7',
      gambar: require('./src/bunga5.png'),
      harga: 'Rp. 20.000',
    },
    {
      nama: 'Bunga 8',
      gambar: require('./src/bunga5.png'),
      harga: 'Rp. 20.000',
    },
  ]);

  const [kategori, setkategoti] = useState([
    {nama: 'kategori1'},
    {nama: 'kategori2'},
    {nama: 'kategori3'},
    {nama: 'kategori4'},
    {nama: 'kategori5'},
    {nama: 'kategori6'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}>
          <Image
            source={require('./src/logo.png')}
            style={{width: '20%', height: 22}}
          />
          <TouchableOpacity
            style={{paddingRight: 10}}
            onPress={() => props.navigation.navigate('Keranjang')}>
            <Icon name="shopping-cart" size={20} />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <FlatList
          style={{marginLeft: 5}}
          data={kategori}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                margin: 5,
                paddingHorizontal: 15,
                paddingVertical: 5,
                borderRadius: 15,
              }}>
              <Text>{item.nama}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatGrid
        style={{}}
        itemDimension={160}
        data={dataBarang}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('DetailScreen')}
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
            }}>
            <Image
              source={item.gambar}
              style={{
                backgroundColor: '#EDF2FF',
                margin: 8,
                borderRadius: 10,
                height: 200,
                width: '90%',
              }}
              resizeMode="contain"
            />
            <View style={{paddingLeft: 10}}>
              <Text style={{fontSize: 15, fontWeight: '600'}}>{item.nama}</Text>
              <Text
                style={{fontSize: 20, fontWeight: '700', paddingBottom: 25}}>
                {item.harga}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 60,
          backgroundColor: 'white',
          elevation: 10,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Icon name="home" size={30} color="#900" style={styles.iconStyle} />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Icon name="heart" size={30} color="#900" style={styles.iconStyle} />
          <Text>Whislist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center'}}>
          <Icon name="user" size={30} color="#900" style={styles.iconStyle} />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BerandaScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EDF2FF',
    flex: 1,
  },
  appBar: {
    height: 60,
    elevation: 1,
    paddingHorizontal: 5,
  },
  iconStyle: {
    color: '#00B528',
  },
});

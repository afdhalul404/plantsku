import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Teks,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Keranjang = props => {
  const [suka, setSuka] = useState([
    {
      gambar: require('./src/bunga1.png'),
      judul: 'Bunga 1',
      harga: 'Rp. 25.000',
    },
    {
      gambar: require('./src/bunga2.png'),
      judul: 'Bunga 2',
      harga: 'Rp. 40.000',
    },
    {
      gambar: require('./src/bunga3.png'),
      judul: 'Bunga 3',
      harga: 'Rp. 45.000',
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#EDF2FF'}}>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('BerandaScreen')}>
          <Icon name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '35%',
          }}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            Keranjang
          </Text>
        </View>
      </View>
      <View>
        <FlatList
          data={suka}
          renderItem={({item}) => (
            <View
              style={{
                flex: 1,
                height: 140,
                backgroundColor: '#fff',
                marginHorizontal: 20,
                borderRadius: 10,
                elevation: 1,
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: '35%',
                  backgroundColor: '#EDF2FF',
                  margin: 8,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: 10,
                  }}>
                  <Image
                    source={item.gambar}
                    style={{
                      width: '60%',
                      height: '90%',
                    }}
                  />
                </View>
              </View>
              <View style={{marginTop: 15}}>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {item.judul}
                </Text>
                <Text style={{fontSize: 16, fontWeight: '600'}}>
                  {item.harga}
                </Text>
              </View>
              <View>
                <View
                  style={{
                    width: 110,
                    height: 35,
                    backgroundColor: '#63C051',
                    borderRadius: 5,
                    marginTop: 90,
                    marginLeft: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity>
                    <Text style={{color: 'white'}}>Checkout</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Keranjang;

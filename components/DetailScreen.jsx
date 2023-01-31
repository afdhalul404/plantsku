import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
// import Icon from 'react-native-vector-icons/FontAwesome5';

const DetailScreen = props => {
  const [tambahBarang, setTambahBarang] = useState({
    nama: 'Bunga1',
    harga: '25.000',
    gambar: require('./src/bunga1.png'),
  });

  const [tambah, setTambah] = useState(1);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 20,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('BerandaScreen')}>
          <Icon name="chevron-back-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Keranjang')}>
          <Icon name="cart" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{height: '45%', backgroundColor: '#fff'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={tambahBarang.gambar}
            style={{width: 180, height: 300, marginBottom: 50}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#EDF2FF',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20, fontWeight: '400', color: 'black'}}>
            {tambahBarang.nama}
          </Text>
          <Text style={{paddingTop: 10, color: 'black'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => setTambah(tambah - 1)}
              style={{
                borderRadius: 30,
                borderWidth: 2,
                borderColor: '#969696',
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: '#969696'}}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 15, marginHorizontal: 20}}>{tambah}</Text>
            <TouchableOpacity
              onPress={() => setTambah(tambah + 1)}
              style={{
                borderRadius: 30,
                borderWidth: 2,
                borderColor: '#969696',
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#969696',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontWeight: '600', fontSize: 18, color: 'black'}}>
              Rp. {tambahBarang.harga}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 30,
          }}>
          <View
            style={{
              width: '12%',
              height: 40,
              borderRadius: 8,
              borderColor: '#00B528',
              borderWidth: 1.5,
            }}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="heart-outline" size={30} color="#00B528" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: '85%',
              height: 40,
              backgroundColor: '#00B528',
              borderRadius: 8,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white'}}>Beli</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;

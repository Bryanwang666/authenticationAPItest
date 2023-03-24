import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import Product from '../../Components/Product/Product';
import FooterNavigation from '../../Components/FooterNav/FooterNavigation';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const handleSearch = () => {
    onSearch(text);
  };
  const product = {
    image: require('../../../assets/images/image1.png'),
    name: 'Test One',
    rating: 4.5,
    city: 'Canada',
    price: '$49',
  };
  const product2 = {
    image: require('../../../assets/images/image2.png'),
    name: 'Test Two',
    rating: 4.8,
    city: 'US',
    price: '$59',
  };
  const navigation = useNavigation();
  const onProductPressed = () =>{
    console.log(product.name)
    navigation.navigate('ProductDetail');
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <CustomInput placeholder='Search' onChangeText={setText} value={text} />
        <TouchableOpacity style={styles.button} onPress={handleSearch}>
          <Image source={require('../../../assets/images/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Top Resort</Text>
        <View style={styles.productContainer}>
          <Product style={styles.product}
            image={product.image}
            name={product.name}
            rating={product.rating}
            city={product.city}
            price={product.price}
            onPress={onProductPressed}
            
          />
          <Product style={styles.product}
            image={product2.image}
            name={product2.name}
            rating={product2.rating}
            city={product2.city}
            price={product2.price}
          />
          <Product style={styles.product}
            image={product.image}
            name={product.name}
            rating={product.rating}
            city={product.city}
            price={product.price}
          />
          
        </View>
        <View style={styles.footer}>
          <FooterNavigation />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 50,
    height: '100%',
    backgroundColor:'rgb(247,247,247)',
    flex:1,
  },
  searchBox: {
    width: '80%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    padding: 10,
    backgroundColor: '#008fa0',
    borderRadius: 10,
    marginLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  header: {
    alignSelf: 'flex-start',
    paddingLeft: 15,
    paddingTop: 20,
    fontSize: 20,
    color: '#333',
    fontWeight: 600,
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  product: {
    width: '50%',
    marginBottom: 20,
  },
  footer:{
    width:'100%',
    position:'absolute',
    bottom:0,
  }
});
export default HomeScreen
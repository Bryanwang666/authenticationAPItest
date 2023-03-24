import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import ProductDetail from '../../Components/ProductDetail';
import { useNavigation } from '@react-navigation/native';
const ProductDetailScreen = () => {
  
  const product = {
    image: require('../../../assets/images/image1.png'),
    name: 'Test One',
    rating: 4.5,
    city: 'Canada',
    price: '$49',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.'
  };
  const navigation = useNavigation();
  const onBookingPressed = () =>{
    console.log(product.name)
    navigation.navigate('ProductBooking');
  }
  return (
    <View style={styles.container}>
      
        <ProductDetail
        image={product.image}
        name={product.name}
        rating={product.rating}
        city={product.city}
        price={product.price}
        description={product.description}
        onPress={onBookingPressed}
        />
         
    </View>
  )
}

const styles = StyleSheet.create({
  
});
export default ProductDetailScreen
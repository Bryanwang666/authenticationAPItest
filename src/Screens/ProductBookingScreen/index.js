import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import ProductBooking from '../../Components/ProductBooking';

const ProductBookingScreen = () => {
  
  const product = {
    image: require('../../../assets/images/image1.png'),
    name: 'Test One',
    rating: 4.5,
    city: 'Canada',
    price: '$49',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum quis mauris in lacus tincidunt ultrices.'
  };
  return (
    <View style={styles.container}>
      
        <ProductBooking
        image={product.image}
        price={product.price}
        />
         
    </View>
  )
}

const styles = StyleSheet.create({
  
});
export default ProductBookingScreen
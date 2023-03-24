import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity} from 'react-native';
const Product = ({ image, name, rating, city, price,onPress }) => {
 
  return (
    <TouchableOpacity  style={styles.container} onPress={onPress}>
      <View style={{paddingBottom:10,}}>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.name}>{name}</Text>
        </View>
        <View style={[styles.column,styles.row2]}>
          <Image source={require('../../../assets/images/YellowStar.png')} style={styles.icon} />
          <Text style={styles.rating}>{rating}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.column,styles.row3,styles.alignLeft]}>
          <Image source={require('../../../assets/images/locate.png')} style={styles.icon2} />
          <Text style={styles.city}>{city}</Text>
        </View>
        <View style={[styles.column,styles.row3,styles.alignRight]}>
          <Text style={styles.price}>{price}</Text><Text style={styles.price2}>/Visit</Text>
        </View>
      </View>
    </TouchableOpacity >
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor:'#fff',
    padding:10,
    borderRadius:10,
  },
  image: {
    width: 147,
    height: 110,
    borderRadius:20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  row3: {
    flexDirection: 'row',
  },
  column: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 13,
    color: '#888',
    fontWeight: 'bold',
  },
  city: {
    fontSize: 12,
    color: '#888',
  },
  price: {
    fontSize: 18,
    marginRight:3,
    fontWeight: 'bold',
    color: '#008fa0',
  },
  price2: {
    fontSize: 11,
    marginTop:2,
  },
  icon:{
    width:14,
    height:14,
  },
  icon2:{
    width:10,
    height:12,
    marginRight:3,
  },
  alignLeft: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  alignRight: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Product;
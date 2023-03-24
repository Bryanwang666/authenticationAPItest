import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const ProductDetail = ({ image, name, rating, city, price,description,onPress }) => {
    return (
        <View style={styles.container}>
        <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.scrollViewContentContainer}>
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} />
            </View>
            <View style={styles.row}>
                <Text style={styles.name}>{name}</Text>
                
                <Text style={styles.rating}><Image source={require('../../../assets/images/YellowStar.png')} style={{width:16,height:16,marginRight:3,}} />{rating}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.city}><Image source={require('../../../assets/images/locate.png')} style={{width:12,height:18,marginRight:5,}} />{city}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.description}>
                {description}
                </Text>
                
            </View>
        </ScrollView>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>Booking Now | {price}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.heart}>
                <Image source={require('../../../assets/images/like.png')} style={styles.heartIcon} />
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    
    container: {
        height:'100%',
    },
    scrollViewContainer:{
        width:'100%',
        padding:20,
    },
    imageContainer: {
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        marginVertical:10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius:20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    rating: {
        color: '#008fa0',
        fontWeight: 'bold',
    },
    city: {
        fontSize: 18,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        paddingBottom:200,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#008fa0',
        paddingVertical: 15,
        paddingHorizontal: 60,
        borderRadius: 30,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    heart: {
        padding: 10,
    },
    heartIcon: {
        width: 30,
        height: 30,
    },
});

export default ProductDetail;
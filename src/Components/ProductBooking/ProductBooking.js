import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Svg, { Line } from 'react-native-svg';

const ProductBooking = ({ image, onPress }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const onDatesChange = (dates) => {
        setStartDate(dates.startDate);
        setEndDate(dates.endDate);
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.scrollViewContentContainer}>
                <View style={styles.imageContainer}>
                    <Image source={image} style={styles.image} />
                </View>
                <View style={styles.calendarContainer}>
                    <CalendarPicker
                        startFromMonday={true}
                        allowRangeSelection={true}
                        todayBackgroundColor="#008fa0"
                        selectedDayColor="#008fa0"
                        selectedDayTextColor="#FFFFFF"
                        onDateChange={onDatesChange}
                        textStyle={{
                            fontFamily: 'Arial',
                            color: '#333',
                        }}
                    />
                </View>
                <View style={styles.row}>
                        <Text style={styles.priceLeft}>4 nights</Text>
                        <Svg style={styles.svg}>
                            <Line x1="30%" y1="9" x2="90%" y2="9" stroke="#008fa0" strokeWidth="1" strokeDasharray="5,5" />
                        </Svg>
                        <Text style={styles.priceRight}>$500</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.priceLeft}>Tax</Text>
                    <Svg style={styles.svg}>
                            <Line x1="30%" y1="9" x2="90%" y2="9" stroke="#008fa0" strokeWidth="1" strokeDasharray="5,5" />
                        </Svg>
                    <Text style={styles.priceRight}>$65</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.priceLeft}>Total</Text>
                    <Svg style={styles.svg}>
                            <Line x1="30%" y1="9" x2="90%" y2="9" stroke="#008fa0" strokeWidth="1" strokeDasharray="5,5" />
                        </Svg>
                    <Text style={styles.priceRight}>$565</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Name" />
                    <View style={styles.inputBorder} />
                    <TextInput style={styles.input} placeholder="Address" />
                    <View style={styles.inputBorder} />
                    <TextInput style={styles.input} placeholder="Email" />
                    <View style={styles.inputBorder} />
                </View>

            </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Make Reservation</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    scrollViewContainer: {
        width: '100%',
    },
    imageContainer: {
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    calendarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    svg:{
        position:'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    priceLeft: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    priceRight: {
        color: '#008fa0',
        fontWeight: 'bold',
    },
    inputContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
        marginBottom: 150,
    },
    input: {
        height: 50,
        fontSize: 16,
        color: '#333',
        paddingLeft: 10,
        paddingRight: 5,
    },
    inputBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#008fa0',
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
});

export default ProductBooking;
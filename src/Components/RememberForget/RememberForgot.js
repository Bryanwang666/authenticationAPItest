import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomButton from '../../Components/CustomButton/CustomButton';
import CheckBox from 'react-native-check-box';

const RememberForgot = () => {
  const [isChecked,setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      <CheckBox isChecked={isChecked} onClick={()=>setIsChecked(!isChecked)} rightText="Remember me" rightTextStyle={styles.rightText} checkBoxColor="#008fa0"/>
      <TouchableOpacity>
        <Text style={styles.text}>Forget password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  rightText: {
    fontSize: 14,
    color: '#333',
    position: 'absolute', // position rightText absolutely
    left: 15, // align rightText to the right edge of the container
  },
  text: {
    color: '#333',
    fontSize:14,
  },
});

export default RememberForgot;
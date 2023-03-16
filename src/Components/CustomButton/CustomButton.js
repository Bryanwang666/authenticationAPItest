import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress,text,type}) => {
  return (
    <Pressable onPress={onPress} style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}
const styles = StyleSheet.create({
    container:{
        width:'70%',
        padding:15,
        marginVertical:15,
        alignItems:'center',
        borderRadius:10,
    },
    container_primary:{
        backgroundColor:"#3b7171",
    },
    container_secondary:{
        backgroundColor:"#eee",
        padding:0,
        borderRadius:0,
        marginVertical:0,
    },
    container_disable:{
      backgroundColor:"#666",
    },
    text_primary:{
        color:"#fff",
        fontWeight:'bold',
    },
    text_secondary:{
        color:"#333",
    },
    text_disable:{
      color:"#fff",
      fontWeight:'bold',
  },
  });
export default CustomButton
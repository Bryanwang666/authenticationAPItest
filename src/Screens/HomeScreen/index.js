import { View, Text,Image } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo.png'

const HomeScreen = () => {
  return (
    <View style={{alignItems:'center',paddingVertical:150,paddingHorizontal:20}}>
      <Text style={{fontSize:40,alignSelf:'center'}}>Hello World!</Text>
      <Image source={Logo} style={{width:200,height:150,marginVertical:100,}}/>
    </View>
  )
}

export default HomeScreen
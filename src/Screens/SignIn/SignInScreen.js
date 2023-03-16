import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const onSignInPressed = () =>{
    console.warn('sign in');
    navigation.navigate('Home');
  }
  const onSignUnPressed = () =>{
    navigation.navigate('SignUp');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in!</Text>
      <CustomInput placeholder='Email' value={email} setValue={setEmail}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>
      <CustomButton text='Sign in' onPress={onSignInPressed} type="primary"/>
      <CustomButton text="Don't have an account? Create one" onPress={onSignUnPressed} type="secondary"/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    padding: 20,
  },
  header:{
    fontSize:50,
    marginVertical:20,
    maxHeight:100,
  },
});
export default SignInScreen;
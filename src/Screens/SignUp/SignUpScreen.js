import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
  const navigation = useNavigation();
  const onRegisterPressed = () =>{
    console.warn('Register');
    navigation.navigate('Home');
  }
  const onSignInPressed = () =>{
    navigation.navigate('SignIn');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Creat an account</Text>
      <CustomInput placeholder='Email' value={email} setValue={setEmail}/>
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>
      <CustomInput placeholder='Repeat Password ' value={passwordRe} setValue={setPasswordRe} secureTextEntry/>
      <CustomButton text='Register' onPress={onRegisterPressed} type="primary"/>
      <CustomButton text="Already have an account? Sign in" onPress={onSignInPressed} type="secondary"/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        padding: 20,
      },
  header:{
    fontSize:35,
    marginVertical:20,
  },
});
export default SignUpScreen;
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkValidEmail,setCheckValidEmail] = useState(false);
  const handleCheckEmail = (text) =>{
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  }
  
  const navigation = useNavigation();
  
  const onSignInPressed = () =>{
    //console.warn('sign in');
    const data = {userEmail: email, userPassword: password};
    fetch('http://testapi.neowu.ca/userLogin.php?Content-Type=application/json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
      if(data.message == 'not match'){
        alert('Please enter valid email and password'); // 处理API响应
      }else{
        navigation.navigate('Home');
      }
    })
    .catch(error => {
      console.error(error);
    });
  }
  const onSignUnPressed = () =>{
    navigation.navigate('SignUp');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log in!</Text>
      <CustomInput placeholder='Email' value={email} setValue={(text)=>handleCheckEmail(text)} />
      {checkValidEmail ? <Text style={styles.warning}>Wrong format Email</Text> : <Text></Text>}
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
      {email == '' || password == '' || checkValidEmail == true ? (<CustomButton text='Sign in' onPress={onSignInPressed} type="disable"/>):
      (<CustomButton text='Sign in' onPress={onSignInPressed} type="primary"/>)}

      <CustomButton text="Don't have an account? Create one" onPress={onSignUnPressed} type="secondary"/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    paddingVertical: 40,
    paddingHorizontal:20,
  },
  header:{
    fontSize:50,
    marginVertical:20,
    maxHeight:100,
  },
  warning:{
    color:"#f00"
  },
});
export default SignInScreen;
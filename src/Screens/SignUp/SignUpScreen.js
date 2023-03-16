import { View, Text, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRe, setPasswordRe] = useState('');
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

  const onRegisterPressed = () =>{
    //console.warn('Register');
    const data = {userEmail: email, userPassword: password, reUserPassword: passwordRe,};
    fetch('http://testapi.neowu.ca/userSignup.php?Content-Type=application/json', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => response.json())
    .then(data => {
      if(data.message == 'Account Exit' ||data.message == 'password not match' ){
        alert(data.message); // 处理API响应
      }else{
        alert(data.message);
        navigation.navigate('SignIn');
      }
      console.log(data.message)
      
    })
    .catch(error => {
      console.error(error);
    });
  }
  const onSignInPressed = () =>{
    navigation.navigate('SignIn');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Creat an account</Text>
      <CustomInput placeholder='Email' value={email} setValue={(text)=>handleCheckEmail(text)} />
      {checkValidEmail ? <Text style={styles.warning}>Wrong format Email</Text> : <Text></Text>}
      <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry/>
      <CustomInput placeholder='Repeat Password ' value={passwordRe} setValue={setPasswordRe} secureTextEntry/>
      
      {email == '' || password == '' || checkValidEmail == true ? (<CustomButton text='Register' onPress={onRegisterPressed} type="disable"/>):
      (<CustomButton text='Register' onPress={onRegisterPressed} type="primary"/>)}
      <CustomButton text="Already have an account? Sign in" onPress={onSignInPressed} type="secondary"/>
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
    fontSize:35,
    marginVertical:20,
  },
  warning:{
    color:"#f00"
  },
});
export default SignUpScreen;
import { View, Text, StyleSheet, useWindowDimensions,Image } from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../Components/CustomInput/CustomInput';
import CustomButton from '../../Components/CustomButton/CustomButton';
import RememberForgot from '../../Components/RememberForget/RememberForgot';
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

  const { width, height } = useWindowDimensions();
  const centerElWidth = width * 0.9;
  const centerElHeight = height * 0.75;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome Back!</Text>
      <View style={[styles.centerEl, { width: centerElWidth, height: centerElHeight }]}>
        
        <View style={styles.logoContainer}>
          <Image source={require('../../../assets/images/logo-star.png')} style={styles.logo} />
        </View>
        <CustomInput placeholder='Email' value={email} setValue={(text)=>handleCheckEmail(text)} />
        {checkValidEmail ? <Text style={styles.warning}>Wrong format Email</Text> : <Text></Text>}
        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry />
        <RememberForgot/>
        {email == '' || password == '' || checkValidEmail == true ? (<CustomButton text='Sign in' onPress={onSignInPressed} type="disable"/>):
        (<CustomButton text='Sign in' onPress={onSignInPressed} type="primary"/>)}

        <CustomButton text="Don't have an account? Create one" onPress={onSignUnPressed} type="secondary"/>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    paddingVertical: 40,
    backgroundColor:'#008fa0',
    flex:1,

  },
  centerEl:{
    alignItems:'center',
    backgroundColor:'#fff',
    padding:30,
    borderRadius:30,
    marginTop:20,
    width:"80%",
  },
  header:{
    alignSelf: 'flex-start',
    paddingLeft:20,
    paddingTop:20,
    fontSize:30,
    color:'#fff',
    fontWeight:600,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    marginBottom:30,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  warning:{
    color:"#f00"
  },
});
export default SignInScreen;
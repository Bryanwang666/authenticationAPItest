import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FooterNavigation = () => {
  const navigation = useNavigation();
  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToLocation = () => {
    navigation.navigate('location');
  };

  const goTochat = () => {
    navigation.navigate('chat');
  };

  const goToLike = () => {
    navigation.navigate('like');
  };

  const goToProfile = () => {
    navigation.navigate('profile');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={goToHome}>
        <Image style={styles.icon} source={require('../../../assets/images/home.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToLocation}>
        <Image style={styles.icon} source={require('../../../assets/images/location.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goTochat}>
        <Image style={styles.icon} source={require('../../../assets/images/chat.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToLike}>
        <Image style={styles.icon} source={require('../../../assets/images/like.png')} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer} onPress={goToProfile}>
        <Image style={styles.icon} source={require('../../../assets/images/profile.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 20,
    paddingBottom:30,
    paddingHorizontal: 20,
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default FooterNavigation;
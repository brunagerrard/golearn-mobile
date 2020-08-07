import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={giveClassesBgImage} 
        style={styles.content}
        resizeMode="contain"
      >

        <Text style={styles.title}>Wanna teach?</Text>
        <Text style={styles.description}>Imparting knowledge is the best. Please sign up on our web platform.</Text>

      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Alrighty</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
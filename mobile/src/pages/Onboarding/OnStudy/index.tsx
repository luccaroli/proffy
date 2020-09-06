import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import giveClassesBgImage from '../../../assets/images/give-classes-background.png'
import studyIcon from '../../../assets/images/icons/studyhd.png'
import nextIcon from '../../../assets/images/icons/next.png'


const OnStudy: React.FC = () => {
  const { navigate } = useNavigation()

  function handleNext() {
    navigate('OnTeacher')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <ImageBackground 
          resizeMode="contain" source={giveClassesBgImage} style={styles.iconContainer}>
          <Image source={studyIcon} style={styles.studyIcon} />
        </ImageBackground>
      </View>
      <View style={styles.boxGray}>
        <Text style={styles.textOne}>01.</Text>
          <Text style={styles.textTwo}>
            Encontre vários {'\n'}professores para {'\n'}ensinar você
          </Text>
        <View style={styles.nextIcon}>
          <BorderlessButton onPress={handleNext} >
            <Image source={nextIcon} resizeMode="contain"  />
          </BorderlessButton>
        </View>
      </View>
    </View>
    
  )
}

export default OnStudy;


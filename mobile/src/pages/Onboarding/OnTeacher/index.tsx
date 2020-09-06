import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';
import giveClassesBgImage from '../../../assets/images/give-classes-background.png'
import teacherIcon from '../../../assets/images/icons/give-classeshd.png'
import nextIcon from '../../../assets/images/icons/next.png'


const OnTeacher: React.FC = () => {
  const { navigate } = useNavigation()

  function handleNext() {
    navigate('Landing')
  }

  return (
    <View style={styles.container}>
    <View style={styles.box}>
      <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={styles.iconContainer}>
        <Image source={teacherIcon} style={styles.teacherIcon} />
      </ImageBackground>
    </View>
    <View style={styles.boxGray}>
      <Text style={styles.textOne}>02.</Text>
        <Text style={styles.textTwo}>
          Ou dê aulas {'\n'}sobre o que você {'\n'}mais conhece
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

export default OnTeacher;




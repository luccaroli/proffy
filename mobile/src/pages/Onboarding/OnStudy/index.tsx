import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import styles from './styles'
import giveClassesBgImage from '../../../assets/images/onboarding/background.png'
import studyIcon from '../../../assets/images/icons/studyhd.png'
import nextIcon from '../../../assets/images/icons/next.png'
import pointsIcon from '../../../assets/images/icons/points.png'

const OnStudy: React.FC = () => {
  const { navigate } = useNavigation()

  function handleNext() {
    navigate('OnTeacher')
  }
  
  return (
     <View style={styles.container}>

       <View style={styles.header}>
        <Image source={studyIcon} style={styles.icon} />
        <Image source={giveClassesBgImage} style={styles.background} />
       </View>
       
      <View style={styles.textContainer}>
        <Text style={styles.title}>01.</Text>
        <Text style={styles.description}>Encontre vários{'\n'}professores para{'\n'}ensinar você</Text>
      </View>

      <View style={styles.footer}>
        <Image source={pointsIcon} />

        <RectButton onPress={handleNext}>
          <Image source={nextIcon} />
        </RectButton>
      </View>
     </View>
  )
}

export default OnStudy;


import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import giveClassesBgImage from '../../../assets/images/onboarding/background.png'
import teacherIcon from '../../../assets/images/icons/give-classeshd.png'
import nextIcon from '../../../assets/images/icons/next.png'
import pointsIconTwo from '../../../assets/images/icons/pointstwo.png'


const OnTeacher: React.FC = () => {
  const { navigate } = useNavigation()

  function handleNext() {
    navigate('Login')
  }

  return (
    <View style={styles.container}>

       <View style={styles.header}>
        <Image source={teacherIcon} style={styles.icon} />
        <Image source={giveClassesBgImage} style={styles.background} />
       </View>
       
      <View style={styles.textContainer}>
        <Text style={styles.title}>02.</Text>
        <Text style={styles.description}>Ou dê aulas{'\n'}sobre o que você{'\n'}mais conhece</Text>
      </View>

      <View style={styles.footer}>
        <Image source={pointsIconTwo} />

        <RectButton onPress={handleNext}>
          <Image source={nextIcon} />
        </RectButton>
      </View>
     </View>
  )
}

export default OnTeacher;




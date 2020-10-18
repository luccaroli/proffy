import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, KeyboardAvoidingView, Platform } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

import backIcon from '../../assets/images/icons/back.png'

import styles from './styles';

const SignUp: React.FC = () => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate('Login')
  }

  return (

    <KeyboardAvoidingView 
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'position' : undefined}
      contentContainerStyle={styles.container}
    >
      <View style={styles.content}>
        <BorderlessButton style={styles.backButton} onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Text style={styles.title}>Crie sua conta gratuíta</Text>
        <Text 
          style={styles.description}
        >
          Basta preencher esses dados{'\n'}e você estará conosco.
        </Text>
      </View>

      <View style={[styles.content, { alignItems: 'center' }]}>
        <Text style={[styles.title, { right: 60, fontSize: 24 }]}>01. Quem é você?</Text>
        <TextInput
          style={[styles.input, { borderBottomStartRadius: 0, borderBottomEndRadius: 0 }]}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />
        <TextInput
          style={[styles.input, { borderTopStartRadius: 0, borderTopEndRadius: 0 }]}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={() => {}}
        />        
        <TouchableOpacity style={styles.button}>
          <Text style={
            {
              fontFamily: 'Poppins_600SemiBold',
              color: '#fff',
              fontSize: 14,
            }
          }
          >
            Próximo
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp;
import React, { useState } from 'react';
import 
  { 
    Image, 
    TextInput, 
    TouchableOpacity, 
    KeyboardAvoidingView, 
    Text, 
    View, 
    Platform,
  } 
from 'react-native';
import { useNavigation } from '@react-navigation/native';


import proffyLogin from '../../assets/images/proffy-login.png'
import backgroundLogin from '../../assets/images/background-login.png'

import styles from './styles'

// Your web app's Firebase configuration
import firebase from '../../services/firebase'


const Login: React.FC = () => {
  const { navigate } = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit() {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
      navigate('Landing')
    } catch (err) {
      console.log(err)
    }
  }

  function navCreateAccount() {
    navigate('SignUp')
  }


  return (
    <View style={styles.background}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'position' : undefined} 
      >

        <View style={styles.backgroundLogo}>
          <Image source={backgroundLogin}/>
          <Image source={proffyLogin} style={styles.logo} />
          <Text style={styles.text}>Sua plataforma de estudos online.</Text>
        </View>
    
        <View style={styles.container} >
          <View style={styles.textHeader} >
            <Text 
              style={
                { 
                  fontSize: 24, 
                  fontFamily: 'Poppins_600SemiBold',
                  color: '#6842C2',
                }
              }
              >
                Fazer login
              </Text>
            <TouchableOpacity onPress={navCreateAccount}>
              <Text style={styles.createAccount}>Criar uma conta</Text>
            </TouchableOpacity>
          </View>

          <TextInput 
            style={[styles.input, { borderBottomStartRadius: 0, borderBottomEndRadius: 0 }]}
            placeholder="Email"
            autoCorrect={false}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput 
            style={[styles.input, { borderTopStartRadius: 0, borderTopEndRadius: 0 }]}
            placeholder="Senha"
            autoCorrect={false}
            value={password}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
          />

          <TouchableOpacity onPress={handleSubmit} style={styles.button}>
            <Text style={
              {
                fontFamily: 'Poppins_600SemiBold',
                color: '#fff',
                fontSize: 14,
                
              }
            }
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login;
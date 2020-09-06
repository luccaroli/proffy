import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, KeyboardAvoidingView, Platform } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage'
import RNPickerSelect from 'react-native-picker-select';

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'
import api from '../../services/api'



const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  
  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')


  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res)
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher )=> {
          
          return teacher.id
        })

        setFavorites(favoritedTeachersIds) 
      }
    })
  }

  
  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    loadFavorites()
    
    const res = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })

    setIsFiltersVisible(false)
    setTeachers(res.data)
  }



  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
    <View style={styles.container}>
      <PageHeader 
        title="Proffys disponíveis" 
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}

      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <View style={styles.pickerSelectStyles} >
            <RNPickerSelect 
              placeholder={{
                label: 'Selecione uma disciplina',
                value: null,
                color: '#333',}}
                style={{
                  inputIOS: {
                    textAlign: 'center',
                    color: "#333"
                  },
                  placeholder: {
                    textAlign: 'center'
                  },
                }}
              
              onValueChange={(value) => setSubject(value)}
              items={[
                { label: "Matemática", value: "Matemática" },
                { label: "Português", value: "Português" },
                { label: "História", value: "História" },
                { label: "Geografia", value: "Geografia" },
                { label: "Artes", value: "Artes" },
                { label: "Biologia", value: "Biologia" },
              ]}
                />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <RNPickerSelect
                  placeholder={{
                    label: "Dia"
                  }}
                  style={{
                    inputIOS: {
                      textAlign: 'center',
                      color: "#333"
                    },
                    placeholder: {
                      textAlign: 'center'
                    },
                  }}
                  onValueChange={(value) => setWeekDay(value)}
                  items={[
                    { label: "Domingo", value: 0 },
                    { label: "Segunda-feira", value: 1 },
                    { label: "Terça-feira", value: 2 },
                    { label: "Quarta-feira", value: 3 },
                    { label: "Quinta-feira", value: 4 },
                    { label: "Sexta-feira", value: 5 },
                    { label: "Sábado", value: 6 },
                  ]}
                />
              </View>

              <View style={styles.inputBlock}>
              <RNPickerSelect
                  placeholder={{
                    label: "Hora"
                  }}
                  style={{
                    inputIOS: {
                      textAlign: 'center',
                      color: "#333"
                    },
                    placeholder: {
                      textAlign: 'center'
                    },
                  }}
                  onValueChange={(value) => setTime(value)}
                  items={[
                    { label: "8:00h", value: "8:00" },
                    { label: "9:00h", value: "9:00" },
                    { label: "10:00h", value: "10:00" },
                    { label: "11:00h", value: "11:00" },
                    { label: "12:00h", value: "12:00" },
                    { label: "13:00h", value: "13:00" },
                    { label: "14:00h", value: "14:00" },
                    { label: "15:00h", value: "15:00" },
                    { label: "16:00h", value: "16:00" },
                    { label: "17:00h", value: "17:00" },
                    { label: "18:00h", value: "18:00" },
                  ]}
                />
                
              </View>
            </View>
            
            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>

          </View>
        )}
      </PageHeader>

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem 
              key={teacher.id} 
              teacher={teacher} 
              favorited={favorites.includes(teacher.id)} 
            
            />
            
            )
        })}
       

      </ScrollView>
    </View>
    </KeyboardAvoidingView>
  )
}

export default TeacherList
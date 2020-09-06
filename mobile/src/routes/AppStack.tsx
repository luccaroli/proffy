import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import OnStudy from '../pages/Onboarding/OnStudy'
import OnTeacher from '../pages/Onboarding/OnTeacher'
import Landing from '../pages/Landing'
import GiveClasses from '../pages/GiveClasses'
import StudyTabs from './StudyTabs'

const { Navigator, Screen } = createStackNavigator()

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OnStudy" component={OnStudy} />
      <Screen name="OnTeacher" component={OnTeacher} />
       <Screen name="Landing" component={Landing} />
       <Screen name="GiveClasses" component={GiveClasses} />
       <Screen name="Study" component={StudyTabs} />

      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
    alignItems: "center",
    justifyContent: 'space-between'
  },
  
  box: {
    top: -10,
    width: 375,
    height: 350,
    backgroundColor: '#04D361'
  },

  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    transform: [{ rotate: '90deg' }],
  },

  teacherIcon: {
    width: 130,
    height: 120,
    padding: 16,
    transform: [{ rotate: '-90deg' }]
  },

  boxGray: {
    width: "100%",
    height: "100%",
  },
 
  textOne: {
   left: 46,
   top: 50,
   fontFamily: 'Poppins_400Regular',
   fontStyle: 'normal',
   fontSize: 40,
   lineHeight: 44,
   color: '#6A6180',
   opacity: 0.16,
  },

  textTwo: {
    top: 60,
    left: 40,
    fontFamily: 'Poppins_400Regular',
    fontStyle: 'normal',
    fontSize: 24,
    lineHeight: 34,
    color: '#6A6180'
  },

  nextIcon: {
    right: 10,
    alignItems: 'flex-end',
    top: 90
  }

})

export default styles
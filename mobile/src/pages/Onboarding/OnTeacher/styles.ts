import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  header: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#04D361',
    width: '100%',
    height: '48%'
  },

  background: {
    resizeMode: 'contain',
    transform: [{ rotate: '-90deg' }],
    opacity: 0.5,
    tintColor: '#fff'
  },
  icon: {
    position: 'absolute',
    width: 120,
    height: 120,
  },
  
  textContainer: {
    alignItems: 'flex-start',
    padding: 40,
    marginBottom: 20,
    marginTop: 40
  },
  
  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 40,
    lineHeight: 44,
    color: '#6A6180',
    opacity: 0.3,
    
  },

  description: {
    marginTop: 12,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 24,
    color: '#6A6180',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
    
  },

})

export default styles

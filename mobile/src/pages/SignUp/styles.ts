import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 30,
    backgroundColor: '#E5E5E5',
    
  },

  content: {
    flex: 1,
    alignItems: 'flex-start',
  },

  backButton: {
    marginBottom: 100
  },

  title: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 32,
    fontStyle: 'normal',
    color: '#280a6b',
    lineHeight: 34,
    paddingTop: 8,
  },

  description: {
    marginTop: 10,
    fontFamily: 'Poppins_400Regular',
    color: '#6A6180',
    fontSize: 14,
    lineHeight: 18,
  },

  input: {
    top: 12,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 0.3,
    borderColor: '#E5E5E5',
    padding: 24,
    borderRadius: 8,
  },

  button: {
    backgroundColor: '#8257E5',
    width: '100%',
    padding: 22,
    alignItems: 'center',
    borderRadius: 8,
    top: 34,
  },
})

export default styles
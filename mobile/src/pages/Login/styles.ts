import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E5E5',

  },

  backgroundLogo: {
    width: '100%',
    height: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8257E5',
  },

  logo: {
    position: 'absolute'
  },

  text: {
    position: 'absolute',
    top: 160,
    color: '#fff',
    width: 150,
    fontFamily: 'Poppins_400Regular',
  },

  container: {
    flex: 1,
    top: -40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '90%',
  },

  input: {
    top: 12,
    backgroundColor: '#fff',
    width: '90%',
    borderWidth: 0.3,
    borderColor: '#E5E5E5',
    padding: 24,
    borderRadius: 8,
  },

  textHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 8,
  },

  button: {
    backgroundColor: '#04D361',
    width: '90%',
    padding: 22,
    alignItems: 'center',
    borderRadius: 8,
    top: 34,
  },

  createAccount: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#9871F5'
  }



})

export default styles
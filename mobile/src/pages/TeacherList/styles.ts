import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f7'
  },

  teacherList: {
    marginTop: -40
  },

  searchForm: {
    marginBottom: 16,
  },

  label: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 4
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  inputBlock: {
    width: '48%',
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 8
  },

  input: {
    height: 54,
    backgroundColor: '#fff',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 8
  },

  pickerSelectStyles: {
    backgroundColor: '#FFF',
    height: 54,
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
    
  },


	inputSelect: {
		height: 54,
		backgroundColor: '#FFF',
		borderRadius: 8,
    justifyContent: 'center',
		paddingLeft:3,
		marginTop: 4,
		marginBottom: 16,
	},

  submitButton: {
    backgroundColor: '#04d361',
    height: 56,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  },

  submitButtonText: {
    color: '#fff',
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
  }


})

export default styles
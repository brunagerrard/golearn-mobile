import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e55792',
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 60,
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    height: 140,
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  buttonPrimary: {
    backgroundColor: '#f58bda',
  },

  buttonSecondary: {
    backgroundColor: '#04d3b7',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#ffc2e1',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  }
});

export default styles;
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ImageBackground
        source={require('./assets/fundo.jpg')}
        style={styles.fundo}
        resizeMode='cover'
      >

        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.form}>

          <TextInput
            placeholder='Nome de usuário'
            style={styles.txtCampo}
          />

          <TextInput
            placeholder='Senha'
            style={styles.txtCampo}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.btLogin}
          >
            <Text style={{color:'white', fontSize:20}}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btLogin}
          >
            <Text style={{color:'white', fontSize:20}}>ou Login com sua Rede Social</Text>
          </TouchableOpacity>

        </View>



      </ImageBackground>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fundo: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop:200,
  },
  form: {
    // backgroundColor: 'orange',
    width: '90%',
  },
  txtCampo: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    fontSize: 20,
    borderRadius: 25,
    paddingLeft: 20,
    marginTop: 20,
  },
  btLogin:{
    backgroundColor:'#0091ff',
    height:50,
    borderRadius: 25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:40,
  }
});

import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './components/TextComponents';

const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <Text style = {styles.title}> Mi Autobiografía </Text>
        
        {/* Contenedor del nombre */}
        <View style = {styles.nameContainer}>
          <Text style = {styles.name}>César Hernández Pescador </Text>
        </View>
        
        <Image style = {styles.image} source={require('./assets/images/hitori_bocchi.png')} />
        <TextComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  nameContainer: {
    width: 200, // Establece el ancho en píxeles
    backgroundColor: 'lightgray', // Solo para visualización
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },

  title:{
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },

  name:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'right',
    marginBottom: 30,
    position: 'absolute',
    top: 0,
    right: 20,
    zIndex: 1,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
})

export default App;
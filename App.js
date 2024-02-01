import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import TextComponent from './components/TextComponents';

//Otra forma de importar lo mismo y más, pero es menos limpio
//import View from 'react-native';
// import Text from 'react-native'; 

const App = () => {
  return(
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <Text style = {styles.title}> Mi biografía </Text>
        <Image style = {styles.image} source={require('./assets/images/otaku hitori bocchi a chambear trabajar.png')} />
        <TextComponent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },

  image: {
    width: 100,
    height: 100
  },
})

export default App;
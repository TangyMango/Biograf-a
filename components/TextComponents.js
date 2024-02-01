import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';


const TextComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewBasicInfo}>
            <Text style={styles.text1}>Ocupación:</Text>
            <Text style={styles.text2}>Estudiante</Text>
            <Text style={styles.text1}>Edad:</Text>
            <Text style={styles.text2}>20 años</Text>
            <Text style={styles.text1}>Fecha de nacimiento:</Text>
            <Text style={styles.text2}>23/06/2003</Text>
            <Text style={styles.text1}>Estado civil:</Text>
            <Text style={styles.text2}>Soltero</Text>
            <Text style={styles.text1}>Lugar de nacimiento: </Text>
            <Text style={styles.text2}>Celaya, Guanajuato, México</Text>
      </View>

      <View style={styles.viewBioText}>
                  
            <Text style={styles.text3}>
                Nací en un ranchito llamado Celaya en una 
                casa que a lado tenía una tiendita donde 
                los primeros años de mi vida compré muchas
                papas y dulces por los premios que traían.
                Cómo olvidar los tazos de pokemon y los 
                llaveros coleccionables de otros monos.
                {'\n'}
                {'\n'}
                Durante mi educación estudié en escuelas 
                de mi ciudad, hasta la universidad que fue
                cuando empecé a ir y venir de mi ranchito
                querido a la gran ciudad.
                {'\n'}
                {'\n'}
                He vivido una vida cómoda y tranquila
                con el amor y apoyo de mi familia, de
                amigos que han ido y venido, y de reales
                que me demuestran su lealtad con el paso 
                del tiempo
                {'\n'}
                {'\n'}
                Espero vivir mucho, sin tantas complicaciones
                de salud, rodearme de buenas personas y 
                aportar mucho a los demás.
            </Text>
            <Image style = {styles.imageCenter} source={require('../assets/images/Celaya.png')} />
            
      </View>

      

      <View style={styles.viewBioText}>
            <Text style={styles.title}>Educación y Amigos</Text>
            <Text style={styles.text3}>
                Durante mi educación estudié en escuelas 
                de mi ciudad. En el kinder no destacaba
                académicamente y tenía un grupo selecto
                de amigos, pero si destacaba en ser 
                algo travieso.
                {'\n'}
                {'\n'}
                En primaria también tenía un grupo 
                selecto de amigos y tampoco destacaba 
                académicamente, en lo que destacaba
                era en destreza física, futbol, 
                ajedrez,  y... se podría decir
                que también era algo travieso.
                {'\n'}
                {'\n'}
                En secundaria decidí cambiarme de 
                escuela, el primer año lo pasé bien
                pero después me empecé a sentir 
                decepcionado de mí mismo y le 
                empecé a echar ganas a la escuela
                y sas, torneos de matemáticas, 
                ajedrez y pasar con excelencia 
                académica ambos años, pero, 
                eso no me hizo sentir mejor.
                {'\n'}
                {'\n'}
                En preparatoria continue echandole 
                ganas a la escuela pero poco a 
                poco me di cuenta de que había 
                descuidado mis amistades y no tenía
                amistades profundas, así que
                empecé a crearlas, aunque no logré
                mucho en ese aspecto, logré
                graduarme con 9.7.
                {'\n'}
                {'\n'}
                En universidad decidí estudiar en 
                Querétaro, he conservado un buen 
                promedio y he hecho buenos amigos
                me siento afortunado de estar en 
                este grupo, ahora me enfoco en
                desarrollar habitos, cosas simples
                como dormir bien, comer bien y así,
                que fueron cosas que descuide
                mucho cuando le echaba muchas ganas
                a la escuela, no digo que sea malo
                echarle ganas, solo que no hay que 
                descuidar otros aspectos y yap, Fin.
                
            </Text>
            <Image style = {styles.imageCenter} source={require('../assets/images/imagen2.png')} />
        </View>

        <View style={styles.viewBioText}>
            <Text style={styles.title}>Aficiones</Text>
            <Text style={styles.text3}>
                Me gusta jugar Halo, las enchiladas,
                pasar tiempo con familia y amigos,
                hacerme amigo de personas chidas,
                programar, dormir bien, leer, 
                jugar ajedrez, jugar futbol, ver
                las estrellas...etc.
            </Text>
            <Image style = {styles.imageCenter} source={require('../assets/images/Imagen3.png')} />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2d3436',
  },
  text2: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#2d3436',
  },
  viewBasicInfo: {
    backgroundColor: 'lightgray',
    padding: 20,
    marginBottom: 20,
  },
  viewBioText: {
    alignSelf: 'center',
    padding: 15,
  },
  text3: {
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'justify',    
    color: '#2d3436',
  },
  imageCenter: {
    width: 300,
    height: 200,
    buttom: 500,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  }
});

export default TextComponent;



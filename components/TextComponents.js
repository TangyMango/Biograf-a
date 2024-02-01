import{Text, View, StyleSheet} from 'react-native';


const TextComponent = () => {
    return (
        <View> 
          <Text style={styles.text}> César Hernández Pescador</Text>
          <Text style={styles.text}> Ocupación: Estudiante </Text>
          <Text style={styles.text}> Edad: 20 años </Text>
          <Text style={styles.text}> Fecha de nacimiento: 23/Jun/2003 </Text>
          <Text style={styles.text}> Estado civil: Soltero </Text>
          <Text style={styles.text}> Lugar de nacimiento: Celaya, Guanajuato, México </Text>
          <Text style={styles.text}> Durante mi educación estudié en escuelas de mi ciudad hasta la universidad
           </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#dfe6e9',
      }
})

export default TextComponent;


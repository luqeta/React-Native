import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function App() {
  return (
    <View style={styles.container}>

<View style={styles.nav}>
<FontAwesome5 name="pizza-slice" size={30} color="white" />
    <Text style={{color: 'white', textAlign: 'center', fontSize: 28,}}>
    Pizza Spider
    </Text>

</View>

<ImageBackground
source={require('./assets/pizza.jpg')}
resizeMode='cover'
style={{width:'100%', height: 250, justifyContent: 'flex-end'}}
>


<Text

style={{color: "white", fontSize: 20, backgroundColor: "#000000c4", padding: 10}}>

A felicide está em cada teia derretida no paladar.

</Text>

</ImageBackground>

<TouchableOpacity style={[styles.card, {backgroundColor: '#f3c633'}]}>
<FontAwesome5 name="motorcycle" size={60} color="black" />
<View>
  <Text style={styles.styleCardTitle}>Delivery</Text>
  <Text style={styles.styleCard}>Faça seu pedido</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={[styles.card, {backgroundColor: '#dbbb51'}]}>
<MaterialIcons name="loyalty" size={60} color="black" />
<View>
  <Text style={styles.styleCardTitle}>Fidelidade</Text>
  <Text style={styles.styleCard}>Compre e ganhe</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={[styles.card, {backgroundColor: '#d86129'}]}>
<AntDesign name="book" size={60} color="black" />
<View>
  <Text style={styles.styleCardTitle}>Cardápio</Text>
  <Text style={styles.styleCard}>Pizza, porções e bebidas</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={[styles.card, {backgroundColor: '#ee701b'}]}>
<Entypo name="area-graph" size={60} color="black" />
<View>
  <Text style={styles.styleCardTitle}>Avalie-nos</Text>
  <Text style={styles.styleCard}>Quremos a sua opinião</Text>
</View>
</TouchableOpacity>

<TouchableOpacity style={[styles.card, {backgroundColor: '#917620'}]}>
<AntDesign name="contacts" size={60} color="black" />
<View>
  <Text style={styles.styleCardTitle}>Contato</Text>
  <Text style={styles.styleCard}>Made um "Oi!"</Text>
</View>
</TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },
  nav: {
    backgroundColor: '#ff3030',
    width: '100%',
    height: 80,
    justifyContent: 'center',
    alignItems:'center',
    flexDirection:'row',
    gap:10,
    paddingTop: 35,
  },
  card:{
    width: '90%',
    height: 95,
    borderRadius: 15,
    marginTop: 10,
    alignItems: 'flex-end', 
    flexDirection: 'row',
    padding: 15,
  },
  styleCardTitle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft: 30,
  },
  styleCard: { 
    marginLeft: 30,
    fontSize: 16,
  }
});

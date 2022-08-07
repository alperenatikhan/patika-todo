import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text,ScrollView, View } from 'react-native';
import Navbar from './src/components/Navbar';
import TodoScreen from './src/components/TodoScreen';
import Footer from './src/components/Footer';


export default function App() {
  return (
    <SafeAreaView>
<Navbar/> 


<ScrollView >
<View style={styles.container}>

<TodoScreen/>


</View>

</ScrollView>
<Footer/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  marginTop:'45px',
    backgroundImage: 'linear-gradient(to top, #fbfafa, #ffffff)',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'10px'
  },
navbarContainer:{
flex:'1',
flexDirection:'row',
backgroundColor:'whitesmoke',
width: '100vw',
position: 'fixed',
zIndex:'5',
padding:'6px',

},

logoText:{

color:'teal',
fontFamily: 'monospace',
fontWeight:'800'

}


});

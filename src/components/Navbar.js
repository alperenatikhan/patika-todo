import {Text,View,StyleSheet} from 'react-native'

export default function Navbar(){

return(
<View style={styles.navbarContainer}>     
<Text style={styles.logoText}> TodoApp</Text>
</View>
)
}


const styles = StyleSheet.create({

navbarContainer:{

flex:'1',
flexDirection:'row',
backgroundColor:'whitesmoke',
width: '100vw',
position: 'fixed',
zIndex:'5',
padding:'10px',


},

logoText:{
color:'teal',
fontFamily: 'monospace',
fontWeight:'800',
fontSize:'18px'


}

})

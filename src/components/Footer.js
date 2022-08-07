import {Text,View, StyleSheet} from 'react-native'

export default function Footer(){

return(
<View style={styles.footerWrapper}>
<Text style={styles.footerText}>Made by Alperen Atik </Text>
</View>
)
}


const styles = StyleSheet.create({


footerWrapper:{
backgroundColor:'teal',
padding:'10px',

},
footerText:{
color:'lightgray',
fontFamily:'monospace',
textAlign:'center'
}





})

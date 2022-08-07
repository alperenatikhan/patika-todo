import React, {useState} from  'react'
import {Text,View,TextInput,TouchableOpacity,Button,StyleSheet} from 'react-native'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({setTodos, todos}){

 const [newTodo,setNewTodo] = useState({})
 const handleInputChange = (el) => { 

el.preventDefault()

setNewTodo({id: uuidv4() ,time:Date.now() ,todo: el.target.value, isCompleted: false})


}
 

const handleButtonPress = () => {

if (newTodo.todo){

 setTodos( (currentState) => [...currentState, newTodo] )
}




 }

return(
<View style={styles.addContainer}>

<TextInput onChange={handleInputChange} style={styles.todoInput} /> 

<TouchableOpacity onPress={handleButtonPress} >
<Text style={styles.button}> Add Todos </Text>
</TouchableOpacity >

</View>

)

}

const styles= StyleSheet.create({

addContainer:{

flex: '1',
flexDirection:'row',
justifyContent:'space-around',
alignItems:'center'

},

todoInput:{

fontSize:'15px',
height:'30px',
borderRadius:'12px',
border: 'solid 1px teal',

},

button:{

backgroundColor: 'teal',
color:'white',
padding:'5px',
borderRadius: '10px',
fontWeight:'bold'


}





})

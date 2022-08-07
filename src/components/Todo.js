
import React, {useState} from 'react'
import {View, Text, Button, TouchableOpacity, StyleSheet, TextInput} from 'react-native'


export default function Todo({item, setTodos, todos}){

const [updateInput,setUpdateInput]= useState(false)
const [updatedTodo, setUpdatedTodo] = useState({...item})


const handleLongPress = () => {

deleteTodo()

}


const deleteTodo =() =>{


const remainedTodos = todos.filter((currItem)=> currItem.id !=  item.id )
setTodos(remainedTodos)

}

const updateTodo =() =>{
setUpdateInput(true)



}

const prepareUpdate =(el) =>{

setUpdatedTodo(el.target.value)

}

const sendUpdate =()=>{

let unchangedTodos= todos.filter((currState)=> currState.id != updatedTodo.id)

setTodos([...unchangedTodos,updatedTodo])
setUpdateInput(false)
           

}

const handleCompleted =()=>{
let unchangedTodos= todos.filter((currState)=> currState.id != item.id)
let selectedTodo= todos.filter((currState)=> currState.id == item.id)
let completedTodo={id:item.id, time:item.time,todo:item.todo, isCompleted: !(item.isCompleted) }

console.log('completedTodo',completedTodo)
console.log('unchangedTodos', unchangedTodos)

setTodos([...unchangedTodos, {id:item.id, time:item.time,todo:item.todo, isCompleted: !(item.isCompleted) } ])

console.log(todos)

}


const Time = new Date(item.time)

return(


<View style={styles.todoContainer}> 


{updateInput? <View style={styles.updateRow}> <TextInput value={updatedTodo.todo} style={styles.activeInput} onChangeText={(value)=> setUpdatedTodo({id :item.id, time:item.time, todo: value, isCompleted:false }) }/> <TouchableOpacity onPress={sendUpdate}> <Text style={styles.confirmButton}> Confirm</Text>  </TouchableOpacity> </View>  :<TouchableOpacity onPress={handleCompleted} onLongPress={handleLongPress}><View><Text style={item.isCompleted ? styles.completedText : styles.defaultText}> {item.todo} </Text> </View> 

<View style={{marginTop: '5px', marginBottom:'5px'}}>
<Text style={styles.timeText}> {Time.getDate()<10 ? `0${Time.getDate()}`: Time.getDate() }.{Time.getMonth()+1 < 10 ? `0${Time.getMonth()+1}`: Time.getMonth()  }.{Time.getUTCFullYear()} {Time.getHours()<10 ? `0${Time.getHours()}`: `${Time.getHours()}`}:{Time.getMinutes()<10 ? `0${Time.getMinutes()}`: `${Time.getMinutes()}` }  </Text>

</View>

</TouchableOpacity>}



{
 !updateInput &&
<View style={{flexDirection:'row', justifyContent: 'space-between', marginTop:'5px',marginBottom:'5px'}}>


<TouchableOpacity onPress={handleCompleted}> <Text style={styles.completeButton}> {item.isCompleted? 'Incomplete': ' Complete '} </Text>
</TouchableOpacity>

<TouchableOpacity onPress={updateTodo}> <Text style={styles.updateButton}> Edit </Text>
</TouchableOpacity>


<TouchableOpacity onPress={deleteTodo}> <Text style={styles.deleteButton}> Delete </Text>
</TouchableOpacity>



</View>
}

{
 updateInput &&
<View style={{flexDirection:'row', justifyContent: 'flex-end', marginTop:'10px'}}>


<TouchableOpacity onPress={deleteTodo}> <Text style={styles.deleteButton}> Delete </Text>
</TouchableOpacity>



</View>
}



</View>

)

} 

const styles= StyleSheet.create({


deleteButton:{width: '50px',backgroundColor:'orangered',color:'whitesmoke'},
todoContainer:{margin: '5px', flex:'1', flexDirection:'column',  border:'solid 2px lightgray', padding:'5px', borderRadius: '6px'},
updateButton:{width: '50px',backgroundColor:'whitesmoke',color:'teal'},
activeInput:{border:'2px solid orangered'},
updateRow: {flex:'1', flexDirection:'row', justifyContent:'space-between', marginBottom:'5px'},
confirmButton:{backgroundColor:'dodgerblue', color:'whitesmoke', padding:'5px', fontWeight:'bold'},
completedText:{textDecorationLine:'line-through', textDecorationStyle: 'solid', color:'gray', fontSize:'18px', fontWeight:'bold'},
defaultText:{color:'teal', fontWeight:'semi-bold', fontSize:'18px'},
completeButton:{backgroundColor:'teal', color: 'whitesmoke'},
timeText:{color:'gray', fontSize:'12px'}

})


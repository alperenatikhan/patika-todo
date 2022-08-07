import React, {useState} from 'react'
import {Text,View,StyleSheet,FlatList} from 'react-native';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';


export default function TodoScreen(){

	const [todos, setTodos] = useState([])

return(
<View style={styles.todoScreen}>     
<View>
<AddTodo setTodos={setTodos} todos={todos}  />
</View>


<View style={{marginTop:'20px'}}>
<TodoList setTodos= {setTodos} todos={todos}/>
</View>

</View>
)
}

const styles = StyleSheet.create({

todoScreen:{

flex:'1',
flexDirection:'column',
width: '90vw',
maxWidth: '300px',
minHeight:'80vh',


}


})

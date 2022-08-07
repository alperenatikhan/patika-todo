

import React, {useState} from 'react'
import {Text,View,Button, FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import Todo from './Todo.js'

export default function TodoList({todos, setTodos}){

let sortedTodos= todos.sort((a,b)=> a.time-b.time)


const incompleteLength= todos.filter(item => item.isCompleted=== false).length
const completedLength= todos.filter(item => item.isCompleted=== true).length
const todoLength = todos.length
const renderComponent = ({item}) =>{

return(<Todo item={item} todos={todos} setTodos={setTodos} />)}

return(


<View>
 {todoLength==0 ?<Text>There are 0 Todos.Write and Add Your Own Todos</Text>: <View style={{flexDirection:'column',alignItems:'flex-start',justifyContent:'center',marginLeft:'30px'}}><Text>There are {todoLength} tasks. </Text> <Text>{completedLength} completed successfully </Text> <Text>{incompleteLength} {incompleteLength >1 ? 'are' : 'is'} waiting to be completed </Text></View> }
<FlatList data={sortedTodos} renderItem={renderComponent} keyExtractor={item=>item.id}  /> 
</View>

)
}





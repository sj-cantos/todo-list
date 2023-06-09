import { useEffect, useState } from 'react'
import {nanoid} from 'nanoid'
import ItemLists from './components/ItemLists'
import AddTodo from './components/AddTodo'
import React from 'react'
import { Flex, Heading, Box, Input} from '@chakra-ui/react'
import Sidebar from './components/Sidebar'

const TodoList = () => {
  const [todos, setTodos] = useState(
    [
      {
        id: nanoid(),
        todo: "Todo",
      },
      {
        id: nanoid(),
        todo:" Wash the dishes",
      },
    ]
  );
  const [task,setTask] = useState('');


 
 

  
  const handleAdd = (event) => {
    event.preventDefault();
    const newItem = { id: nanoid(), todo: task };
    const newTodos = [...todos, newItem]; // Update the items array
    setTodos(newTodos);
    setTask('');
  };


  

  console.log(todos)

  return (

    <>
  
      
      <Flex direction="column" justify="center" align="center" gap="5" pt="8" flex={1}>
        <Heading color="purple.500" >Todo Lists</Heading>
        <Flex direction="row" gap="2">
        
          <Input value ={task} onChange={(event)=>{setTask(event.target.value)}} type="text" placeholder='Add a task' 
                variant="outline" width="auto" focusBorderColor='purple.200' size = "md" />
          <AddTodo handleAdd={handleAdd} />
        
        </Flex>
        <ItemLists todos ={todos} setTodos={setTodos} />
      </Flex>
      
    </>
  )
}

export default TodoList

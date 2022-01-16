import { Button,Form, ListGroup} from 'react-bootstrap';
import {useSelector} from 'react-redux'
import React,{useRef} from 'react'
import {useDispatch} from 'react-redux'
import {  toast } from 'react-toastify'
import {AddTodo} from './actions/todos'
import {RemoveTodo} from './actions/todos'
import {EditTodo} from './actions/todos'

function App() {
  const todos=useSelector(state=>state.todos)
  const inputValue=useRef('')
  const dispatch =useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    if (inputValue.current.value===''){
      toast.error("Iltimos maydonni to'ldiring!", {
        position: toast.POSITION.BOTTOM_LEFT
      });
    }
    else{
      dispatch(AddTodo({id:todos.length+1, task:inputValue.current.value},inputValue))
      inputValue.current.value=null 
      
    }
   
    
    
  }
 
  return (
    <div className="App">
      <div className="container">
      <Form className="mt-5 col-8 offset-2" onSubmit={handleSubmit}>
        <h3 className="my-2 text-center text-primary">Todo App (All Users:{todos.length})</h3>
        <Form.Group>
          <Form.Label> Enter your Task:</Form.Label>
        <Form.Control ref={inputValue} className="my-2" type="text" placeholder="Enter your task"/> 
        <Button type="submit" className="mt-2 " > Add Todo</Button>
        </Form.Group>
      </Form>
       <div className="mt-3">
      {
         todos.length?
         <ListGroup className="col-8 offset-2">
           {
             todos.map(user=>(
               <ListGroup.Item key={user.id} className="d-flex justify-content-between align-items-center"><h6> {user.task} </h6><span> <Button variant="danger" className="mx-2" onClick={()=>dispatch(RemoveTodo(user.id))}>Delete</Button> 
               <Button variant="success" onClick={()=>dispatch(EditTodo(user.id, inputValue))}>Edit</Button></span></ListGroup.Item>
             ))
           }

         </ListGroup>
         :
         <h3> No Users our list </h3>
      }
       </div>


      </div>
    </div>
  );
}

export default App;

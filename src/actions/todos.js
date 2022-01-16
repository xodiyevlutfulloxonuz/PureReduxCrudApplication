
 const AddTodo=(todoItem,inputValue)=>{

    return {
        type:"ADD_TODO",

        payload:{
            ...todoItem,
            inputValue 
        }
    }

}
const RemoveTodo=(id)=>{
    
    return {
        type:"REMOVE_TODO",
        payload:{
            id
        }
    }
}
const EditTodo=(id, inputValue)=>{
    return {
        type:"EDIT_TODO",
        payload:{
            id,
            inputValue 
        }
    }
}

export{
    AddTodo,
    RemoveTodo,
    EditTodo

}



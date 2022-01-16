
let newUserId=0
const initialState=[
    {id:1, task:"Learn React"},
    {id:2, task:"Learn Python TelegramBot"}
]
   const todos=(state=initialState,action)=>{
   switch(action.type){
       case "ADD_TODO":
           if (newUserId===0){
            return [...state, action.payload]
           }
           else{
               let newArr=[...state, action.payload]
               for (let element of newArr){
                 if(element.id===newUserId){
                    element.task=action.payload.inputValue.current.value 
                    newUserId=0
                 }

               }


           }
          
         
          
        
        case "REMOVE_TODO":
            return state.filter(user=>user.id!==action.payload.id)
            
        
        case "EDIT_TODO":
            let user=state.find(user=>user.id===action.payload.id)
            action.payload.inputValue.current.value=user.task 
            newUserId=user.id 
          
         
        default:
            return state 
            
        
   }

}

export default todos








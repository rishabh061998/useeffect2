import { Todosinput } from "./todosinput"
import { TodosItem } from "./todositem"
import { useState } from "react"

export const Todos=() =>{
    const [todos,setTodos]=useState([])
    const handleClick=(text)=>{
        setTodos([...todos,text])
    }
    return <div>
        <Todosinput handleClick={handleClick}/>
        {todos.map(e=>{
            return<TodosItem title={e}/>
        })}
    </div>
}
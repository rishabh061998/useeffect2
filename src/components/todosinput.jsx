import { useState } from "react"

export const Todosinput=({handleClick}) =>{
    const[text,setText]=useState("")
    return <div>
        <input onChange={(e)=>{
            console.log("changing input",e.target.value)
            setText(e.target.value);
        }}type="text" />
        
        <button onClick={()=>{
            handleClick(text)}}>Add todo</button>
    </div>
}
//import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import { Todos } from './components/todos';

function App() {
 
return (
    <div className="App">
 <Todos/>
    </div>
  );
}
/*function First({handleData}){
  const age=10;
  handleData(age)
  return <div>
First
  </div>
}
function second({age}){
  return 
  <div>
    Second
    <p>your age is:{age}</p>
  </div>
}
*/
export default App;

import {useState} from 'react' ;
import './App.css';
import NewCounter from './NewCounter' ;
import NameListReducer from './NameListReducer';
import TodoReducer from './TodoReducer' ;

//import { Component } from 'react';

function Counter(){

  const[count,setCount]=useState(10) ;

  function addOne(){
    setCount(count + 1);
  }
  return <div className="App">
    <button onClick={addOne}>  count :{count}</button>
  </div>
}

function NameList(){
  const [list,setList]=useState(["Jack","Farouk","Basel"]);
  const [name,setName]=useState(()=>"Name");

  const onAddName = ()=>{
    //list.push(name) ;
    setList([...list,name]) ;
    setName("");
  }

  return (
  <div>
    <ul>
      { 
       
        list.map((name)=> <li key={name}>{name}</li>)
      }

    </ul>
    
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    <button onClick={onAddName}> AddName</button>
  </div>
     
  );
}

function App(){
  return (
    <div>
      <Counter />
      <NameList />
      <NewCounter />
      <NameListReducer />
      <TodoReducer />

    </div>
  )
}

export default App;

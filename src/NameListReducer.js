
import React,{useReducer} from 'react'

function NameListReducer(){
    const [state,dispatch]=useReducer((state,action)=>{

        switch(action.type){
            case "SET_NAME":
                return {...state,namelist:action.payload}
            case "ADD_NAME" :
                return ({
                    ...state,
                    names:[...state.names,state.namelist],
                    name:""
                });
        }

    },
        {
            names:[],
            namelist:""
        })
   return(<div>
            
            <input 
            type="text"
            value={state.namelist}
            onChange={e=>dispatch({type:"SET_NAME",payload:e.target.value})} />
             <div>Name={state.namelist}</div>
            <button onClick={()=>dispatch({type:"ADD_NAME"})}>AddName</button>
            <div>
                {state.names.map((namelist,index)=>{
                    return (<div key={index}>{namelist}</div>)
                })}
            </div>
            
           
         </div>)
}

export default NameListReducer ;
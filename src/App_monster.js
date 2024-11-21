
import './App.css';
//import { Component } from 'react';  // this nedd i Class component 
import { useState,useEffect } from 'react';
import CardList from './components/card-list/card-list.component.jsx' ;
import SearchBox from './components/search-box/search-box.component.jsx';

///Functional Component


const App=()=>{

  const [searchField,setsearchField]  = useState('');
  const [title,setTitle]=useState('');
  const [monsters,setMonsters]  = useState([]);
  const [filterdMonsters,setfilterdMonsters]=useState(monsters) ;

   console.log('renderd') ;

  useEffect(()=>{
    
     fetch('https://jsonplaceholder.typicode.com/users').then(response=>  response.json()
  ).then(users=>
    setMonsters(users)
)},[]) ;

useEffect(()=>{
  const newfilterdMonsters = monsters.filter((monster)=>{
    return monster.name.toLocaleLowerCase().includes(searchField)
  });
  setfilterdMonsters(newfilterdMonsters) ;
},[monsters,searchField])

  


  const onsearchChange=(event)=>{
    console.log(event.target.value) ;
      const searchFieldString = event.target.value.toLocaleLowerCase();
          setsearchField(searchFieldString) ;
      
  }

  const ontitleChange=(event)=>{
    console.log(event.target.value) ;
      const searchFieldString = event.target.value.toLocaleLowerCase();
          setTitle(searchFieldString) ;
      
  }

  

  return (
    <div className="App">
        <h1 className='app-title'>{title}</h1>
        <SearchBox onChangeHandler={onsearchChange} 
                   placeholder={'search-monster'} 
                   className={'monster-search'} />

        <br></br>

        <SearchBox onChangeHandler={ontitleChange} 
                   placeholder={'tiset-title'} 
                   className={'box-search'} />

        <CardList  monsters={filterdMonsters } />
    </div>
  )
}

/// ----- Class Compnent
/*class App extends Component {
 
  constructor(){
    super();
    this.state={
      monsters:[],
      searchField:''
       };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response=>  response.json()
       ).then(users=>
      this.setState(()=>{
        return {monsters:users}
      },()=>{console.log(this.state)}) 
    ) ;
  }

  onsearchChange=(event)=>{
    console.log(event.target.value) ;
    const searchField = event.target.value.toLocaleLowerCase();
    
    this.setState(()=> {
      
      return {searchField} ;
      });
     }
  render(){

    const {monsters,searchField} = this.state ;
    const {onsearchChange}=this ;
    const filterdMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField)
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onsearchChange} placeholder={'search-monster'} className={'monster-search'} />
        <CardList  monsters={filterdMonsters } />

      </div>
    );  
  }
  
}*/

export default App;

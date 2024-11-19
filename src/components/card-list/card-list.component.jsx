import React, { Component } from 'react';
import './card-list.styles.css' ;
import Card from '../card/card.component';



// functional Component

const CardList=({monsters})=>{
  
    

    return  (
        
        
            <div className='card-list'>
              {
                monsters.map((monster)=> 
                   
                    
                     <Card monster={monster} key={monster.id}/>)
                     
                    
                   
               }
            </div>
    );
}
//Class Component
/*class CardList extends Component {


    render() {

        const {monsters}=this.props ;
        return (
            <div className='card-list'>
              {
                monsters.map((monster)=> 
                   
                    
                     <Card monster={monster}/>)
                     
                    
                   
               }
            </div>
        );
    }
}*/



export default CardList;
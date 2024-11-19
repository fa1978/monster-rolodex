import React, { Component } from 'react';
import './search-box.styles.css'

const SearchBox=({className,placeholder,onChangeHandler})=>{
    return (
    <div>
      <input  
        className={`search-box ${className}`}    
        type='search' 
        placeholder={placeholder}
        onChange={onChangeHandler }/>
    </div>)
}

//Class compnent
/*class SearchBox extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        return (
            <div>
                <input  
                className={`search-box ${this.props.className}`}    
                type='search' 
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler }/>
            </div>
        );
    }
}*/

export default SearchBox;
import React, { Component } from 'react';

class Bind extends Component{
    constructor(){
        super();
        this.handleChange2=this.handleChange1.bind(this);
    }

    handleChange1(){
        console.log("Button 1 is clicked")
    }

    handleChange3(){
        console.log("Button 4 is clicked");
    }

    render(){
        return(
            <>
                <button onClick={this.handleChange1()}>Click 1</button>
                <button onClick={this.handleChange1}>Click 2</button>
                <button onClick={this.handleChange2}>Click 3</button>
                <button onClick={this.handleChange3}>Click 4</button>
            </>
        )
    }
}

export default Bind;
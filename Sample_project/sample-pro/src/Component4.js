//props example 
//class based
import React, { Component } from "react";

class Component4 extends Component{
    render(){
        return(
            <div>
                <p>This is : {this.props.name} </p>
            </div>
        );
    }
}
export default Component4;
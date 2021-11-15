//claas based component

import React,{Component} from 'react';

class Component1 extends Component{
    
    state ={
        counter : 0
    }

    submit =()=>{
        this.setState({
            counter: this.state.counter+1
        })
    }

    render(){
        return(
            <div>
                {this.state.counter}
                <br/>
                <input type= "button" onClick={this.submit} value="submit"/>
            </div>
        );
    }
       
}

export default Component1;
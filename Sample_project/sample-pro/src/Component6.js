import React from "react";

const Component6 = (props)=>{

    
    const styles ={
        border: '1px solid black',
        width:'80%',
        marginTop: '10px'
    }
    return(
        <div style= {styles}>
            <p>Email:{props.email}</p>
        </div>
    );
}
export default Component6;
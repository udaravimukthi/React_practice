import React from "react";


const R1com = (props)=>{
    return(
        <div>
            this is routing comp 1<br/>
            U send - {props.match.params.id}
        </div>
    );
}
export default R1com;
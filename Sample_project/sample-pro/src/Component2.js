//function based component

import React, { useState } from 'react';

const Component2 = ()=>{
    const [stateCounter, setCounter] = useState({
        counter: 0
    });

    const submit = ()=>{
        setCounter({
            counter : stateCounter.counter + 1
        })
    }
    return(
        <div>
        {stateCounter.counter}
        <br/>
        <input type="button" onClick={submit} value="submit"/>
        </div>
    );
}

export default Component2;

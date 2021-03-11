import React, { useEffect, useState } from 'react';

function SampleFunction(props) {

    var [x, setX] = useState(0);

    useEffect(()=>{
        document.title=`You clicked ${x} times`;
    });

    const incrementX = (e) => {
        x = x + 1;
        setX(x);
    }

    return (
        <div>
            <div>
                <h1 onClick={e => incrementX()}>{props.Title} : {x}</h1>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}
export default SampleFunction;
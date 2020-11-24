import React from 'react';
import "./greetings.css";

function Greetings(props) {
    let greeting = '';
    switch (props.greeting) {
        case 'de':
            greeting = 'Hallo Gunter!';
            break;
        case 'en':
            greeting = 'Hello James!';
            break;
        case 'es':
            greeting = 'Holà Fernando!';
            break;
        case 'fr':
            greeting = 'Bonjour Pierre!'
            break;
        default:
            greeting = 'Hello Mate!';
            break;
    }

    return ( 
        <div className = "greetings" >
           <h1> {greeting} {props.children} </h1> 
        </div>
    );
}

export default Greetings;
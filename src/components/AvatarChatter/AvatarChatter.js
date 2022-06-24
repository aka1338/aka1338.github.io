
import react, { useEffect } from 'react';
import React, { useState } from "react";
import './AvatarChatter.styles.scss';

//TODO Find a way to animate the text!
//TODO Add avatar to the side with animation and sound. 

const dialogueState = {
    RUNNING: 0,
    FINISHED: 1,
    READY: 2
}

let speed = 100; /* The speed/duration of the effect in milliseconds */
let quoteState = 0; 
function AvatarChatter() {
    return (

        <div className="text">
            {DisplayQuote()}
        <button onClick={ChangeQuote()}> New Quote</button>
        </div>
    );
}
function ChangeQuote(){
    if(quoteState === 1){
        quoteState = 0; 
    }
}


function DisplayQuote() {
    // Declare a new state variable, which we'll call "count"
    const [quote, setQuote] = useState(selectRandomQuote(quotes));
    const [text, setText] = useState(""); 
    const [index, setIndex] = useState(0)

    if (index === quote.length){
        quoteState = 1; 
    }

    // This works, now to figure out how to *actually* make it work.
    if(quoteState === 1 && index > 1){
        setText('');
        setIndex(0);
        setQuote(selectRandomQuote(quotes));
    }

    useEffect(() => {
        if (index < quote.length) {
            setTimeout(() => {
              setText(text + quote[index])
              setIndex(index + 1)
            }, speed)
          }
        }, [index])
    
    
    return (
        <div>
            {text}
        </div>
    );
}


// Ideally what we want to do is... 
// 1) Page loads, call selectRandomQuote()
// 2) selectRandomQuote() feeds it's given quote to playQuote()
// 3) playQuote() parses the enum and has a state (in progress) or (finished), which it uses to determine if a quote is 
// done displaying or not.
// 4) If the user clicks on the avatar or hits the [Enter] key, a new quote is displayed (or if the quote is an array,
// the next string in the array is displayed and played). 

function selectRandomQuote(enumeration) {
    // TODO Add some recursion here to store quotes that are more than one line.
    // if (enumeration.length) 
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];

    // If the enum is an array, instead of displaying 
    // a new quote when the user wants a new quote, iterate through the array instead.
    return enumeration[enumKey].quote;
}

// TODO add support for quote arrays. 
const quotes = {
    Empty: {
        quote: "I'm empty inside."
    },
    Love: {
        quote: "Love lost could always be new love gained.",
    },
    Hong_Kong: {
        quote: "In Hong Kong, \"wonton\" means swallowing a cloud.",
    },
    Am_I_In_Space: {
        quote: "Am I out my mind? Or am I in space now?"
    },
    Work: {
        quote: "I can't be late for work, or I'll be fired.",
    },
    Out: {
        quote: "Out of ideas.",
    },
    Elevator: {
        quote: "The 9th floor elevator room. Something about it seems familiar...",
    },
};




export default AvatarChatter;

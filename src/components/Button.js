import React, { components } from "react";
// list of properties 
/*
ClassName
Function
*/
function Button (props)
{
    if(props.myFunction)
    {
        return(
            <button className={props.className} onClick={props.myFunction}>{props.myText}</button>
        ) 
    }
    else {
        return(
            <button className={props.className} onClick={console.log("I have no function. I'm a useless button!")}>{props.myText}</button>
        ) 
    }
}
export default Button;
import React, { component } from "react";
import TextBox from "./TextBox";
import Button from "./Button";
function Prompt () {
    return(
        <div className="Prompt">
        <TextBox></TextBox>
        <Button className="Prompt" myText="Submit"></Button>
        </div>
    )
}
export default Prompt;
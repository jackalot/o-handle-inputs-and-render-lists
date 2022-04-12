import React, { component } from "react";

function ListItem (props) {
    return (
        <li className="ourList"> {props.itemContent}</li>
    );
}
export default ListItem;
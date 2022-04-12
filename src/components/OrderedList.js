import React, { Component } from "react";
import ListItem from "./ListItem";
function OrderedList () {
    return (
        <ol>
            <ListItem itemContent = 'taco'></ListItem>
            <ListItem itemContent = 'taco'></ListItem>
            <ListItem itemContent = 'taco'></ListItem>
            <ListItem itemContent = 'taco'></ListItem>
        </ol>
    )
}
export default OrderedList;
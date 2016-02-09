import React, {Component} from "react"
import Item from "Item";



const List = ({items = ""}) => {
console.log(items);
      items &&
      items.map((item, index) => {
        return (<Item key={index} name={item.name}/>) ;
      })
}
export default List ;

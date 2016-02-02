import React, {Component} from "react"



const List = ({items = ""}) => {

      items &&
      items.map((item, index) => {
        return (<Item key={index} name={item.name}/>) ;
      })
}
export default List

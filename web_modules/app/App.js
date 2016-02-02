import React, {Component} from "react";

import Item from "Item";
import List from "List";

const artists =[
  {name:"Bob Marley"},
  {name:"Bob Dylan"},
  {name:"Odezenne"},
  {name:"Kavinsky"}
];

const kinds = {
  rap:{name:"Rap"},
  rock:{name:"Rock"},
  electro:{name:"Electro"}
}

let kindArray = Object.keys(kinds)

class App extends Component {

  getItem(item,index){
    return (<Item key={index} name={item.name}/>) ;
  }

  render() {
    return (
      <div>
      /*{
        artists &&
        artists.map((artist, index) => {
          return this.getItem(artist,index)
        })
      }*/
      <List items={artists} />

      {
        kinds &&
        kindArray.map((kindKey, index) => {
          //console.log(kinds[kindKey]);
          return this.getItem(kinds[kindKey],index)
        })
      }
      </div>

    );
  }
}

export default App

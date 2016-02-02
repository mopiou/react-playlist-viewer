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
    console.log('getItem');
    return (<Item key={index} name={item.name}/>) ;
  }

  /*{
    artists &&
    artists.map((artist, index) => {
      return this.getItem(artist,index)
    })
  }

  {
    kinds &&
    kindArray.map((kindKey, index) => {
      //console.log(kinds[kindKey]);
      return this.getItem(kinds[kindKey],index)
    })
  }*/

  render() {
    return (
      <div>
        {
          console.log('test');
         return (<List items={artists} />);
        }
      </div>

    );
  }
}

export default App

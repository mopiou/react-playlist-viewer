<<<<<<< HEAD
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
||||||| merged common ancestors
import React, { Component } from 'react';
=======
import React, { Component } from 'react';
import List from "List";

const artists = [
  {name:"Bob Marley"},
  {name:"Bob Dylan"},
  {name:"Odezenne"},
  {name:"Kavinsky"}
]

const kinds = {
  rap: {name:"Rap"},
  rock: {name:"Rock"},
  electro: {name:"Electro"}
}

const kindsArray = Object.keys(kinds).map((k) => { return kinds[k] });
>>>>>>> kimak/step3

  render() {
    return (
      <div>
<<<<<<< HEAD
        {
          console.log('test');
         return (<List items={artists} />);
        }
||||||| merged common ancestors
        Hello React !
=======
        <List items={artists} />
        <List items={kindsArray} />
>>>>>>> kimak/step3
      </div>
<<<<<<< HEAD

    );
||||||| merged common ancestors
    );
=======
    )
>>>>>>> kimak/step3
  }
}

export default App

import React, { Component } from 'react';
import List from "List";
import consts from "./consts";


const kinds = {
  rap: {name:"Rap"},
  rock: {name:"Rock"},
  electro: {name:"Electro"}
}

const kindsArray = Object.keys(kinds).map((k) => { return kinds[k] });

export default class App extends Component {

  state = {
    artists:[],
  };

  fetchArtists(name){
    const URL = consts.api.endpoints.getSearch(name,'artist');
    fetch(URL).then(
      (response)=>{
        response.json().then((data)=>{
            if(!data.error){
              console.log(data);
              this.setState({artists : data.artists.items})
            }
        })
      }
    );
  }

  onChangeHandler = (value) => {
    console.log('App : onChangeHandler value : '+value);
    this.fetchArtists(value);
  };

  componentWillMount(){
    console.log('component mount');
    //this.fetchArtists('bob');
  }

  render() {
    console.log('monRender');
    return (
      <div>
        <List title="Artist" onChange={this.onChangeHandler} items={this.state.artists} autoFilter={false} />
        <List title="Kind" items={kindsArray} />
      </div>
    )
  }
}

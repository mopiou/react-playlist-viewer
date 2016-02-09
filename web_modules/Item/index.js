import React, { Component } from 'react';

const Item = ({name ="" , image=""}) =>


(<div className="item">
  <img src={ image.url} height='40' width='40' />
  {name}

</div>)

export default Item

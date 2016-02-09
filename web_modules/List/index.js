import React, {PropTypes, Component } from 'react';
import debounce from 'lodash.debounce';
import Item from "Item";
import Input from "Input";

export default class List extends Component {

    static propTypes = {
        title: PropTypes.string,
        items: PropTypes.array,
        onChange: PropTypes.func,
        autoFilter: PropTypes.bool,
    };

    static defaultProps = {
        title: "",
        items: [],
        onChange:()=>{},
        autoFilter:true,
    };

    state = {
        inputValue: ""
    };

    onChangeHandler = (value) => {
      console.log(' List : onChangeHandler');
      this.setState({inputValue: value})
      this.props.onChange(value);
    };
    filterName = (item) => {
      return item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1 ;
    };

    render() {
      // destructuring
      const {
        title,
        items,
        onChange,
        autoFilter,
      } = this.props


      const onChangeHandler = (onChange)
        ? debounce(onChange,500)
        : this.onChangeHandler ;



      return (
        <div className="list">
            {
                // onChange || onChangeHandler
                <Input placeholder={title} onChange={onChange || this.onChangeHandler}/>
            }
            {
              items &&
              items.map((item, index) => {

                return (
                    //item.name && item.name.toLowerCase().search(this.state.inputValue.toLowerCase())!=-1 &&
                    (!autoFilter || autoFilter && this.filterName(item)) &&
                    <Item key={index} name={item.name} image={item.images && item.images.length>0 && item.images[0]} />
                );
              })
            }
        </div>)

    }
}

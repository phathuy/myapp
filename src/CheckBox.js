import React,{ Component } from 'react'
class CheckBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox" id="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
            <span id="checkname">I need to rent a car as well</span>           
        </label>
      );
    }
  }
  
  export default CheckBox;
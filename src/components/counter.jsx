import React, { Component } from 'react';

class Counter extends Component {
  state  = {  
    count: this.props.value
  };
  
  styles = {
    fontSize: 30,
    fontWeight: 'bold'
  }


  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  };

  
  render() { 

     return (
    <div>
  
         <span style={this.styles} className={this.getBadgeClasses() }>{this.formatCount()}</span>
      <button 
        onClick={this.handleIncrement} 
        style= {{ fontWeight: 'bold', fontSize: 30 }}
        className="btn btn-secondary btn-sm">Increment
      </button>
    </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}
 
export default Counter;

//this is getting weighty. whoa. Lots of information. making mme tired.
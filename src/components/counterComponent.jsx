import React, { Component } from 'react';

class Counter extends Component {

  componentDidUpdate(prevProps, prevState){
    //
    console.log("Previous Props", prevProps);
    console.log("Previous State", prevState);
    if(prevProps.counter.value !== this.props.value) {
      //Make ajax request to update the data
    }
  }
  
  
  //state={
  //  value: this.props.counter.value,
  //  tags: ['tag1', 'tag2', 'tag3']
  //};
  
  /* constructor(){
    super();
    this.incrementCount = this.incrementCount.bind(this);
  } */
  styles={
      fontSize:20,
      fontWeight: "bold"
  };
  render(){
    console.log('counter')

    let classes = this.handleCssClassSpan();
    return (
      <div className="first-component">
        {/*{this.props.children} rendering childern props*/}
        <span className={classes} style={this.styles} >{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrementCount(this.props.counter)}> Increment </button>
        <button className="btn btn-danger btn-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
        {/*{ this.renderTags() }*/}
        
      </div>
    );
  }
  
  // renderTags() {
  //   if(this.state.tags.length === 0) 
  //     return <p>There is no tags!</p>
  //   return <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>;

  // }
  handleCssClassSpan = () =>{
    let classes = "badge m-2";
    classes += (this.props.counter.value > 0) ? " badge-primary" : " badge-warning";
    return classes;
  }

  formatCount = () => {
    return (this.props.counter.value === 0) ? 'Zero' : this.props.counter.value;
  }

  // incrementCount = () => {
  //   this.setState({value: this.state.value + 1});
  // }
}


export default Counter;

import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'
import Counters from './components/countersComponent'

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App  -  Constructor", this.props); // Si llamo a this.props sin pasar como parametros props y sin llamar al constructor parents, this.props will be undefined
    this.state = {
      counters: [
        {id: 1, value: 0},
        {id: 2, value: 1},
        {id: 3, value: 2},
        {id: 4, value: 5},
        {id: 5, value: 7}
      ]
    }
  }

  componentDidMount(){
    // Ajax call and the setState with new data
    console.log("App - Mounted")
  }

  handleIncrementCount = counter => {
    //console.log(counter)
    //[...this.state.counters] clona un objeto javascript
    // const counters = this.state.counters.map(count => {
    //   if(count.id === counter.id){
    //     count.value ++;
    //   }
    //   return count;
    // })
    // this.setState({ counters });
    //esto esta bien pero veremos otra forma de hacerlo

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters })
  }

  handleDelete = (counterId) => {
    console.log('Event Handle Called', counterId);
    let counters_temp = this.state.counters.filter(counter =>  counter.id !== counterId);
    this.setState({counters: counters_temp}); /* when the key and value are the same {orders: orders} we can't simplify {orders}*/
  }

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  }
  render() {
    console.log('App Rendered')
    return (
      <div className="App">
        <NavBar totalCounters={this.state.counters.filter(counter => counter.value > 0 ).length}></NavBar>  
        <main className="container">
          <Counters onReset={this.handleReset} onDelete={this.handleDelete} onIncrementCount={this.handleIncrementCount} counters={this.state.counters}/>
        </main>
        
      </div>
    );
  }
}

export default App;

import React,{ Component } from 'react';
import Counter from './counterComponent'
class Counters extends Component{

  
  render (){
    const { onReset, counters, onDelete, onIncrementCount} = this.props 
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={ onReset }>Reset</button>
          { counters.map( counter =>  {
            return <Counter key={counter.id}  onDelete={ onDelete } counter={ counter } onIncrementCount={ onIncrementCount }/*value={counter.value} id={counter.id}*/> 
              {/*<h6>Counter #{counter.id}</h6>Esto es usaldo children props*/}
            </Counter>
          }
            
            )
          }
      </div>
    )
  };
}

export default Counters;
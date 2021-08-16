
import React from 'react' 

export class Conteiner extends React.Component {
  state = {.  
    count: 0
  }


increment = () => {
  let currentYear = this.state.count;
  currentYear++;
  this.setState({
    count: currentYear
  })
}

decrement = () => {
  let current = this.state.count;
  current--;
  this.setState({
    count: current
  })
}

reset = () => {
  let reset = this.state.count;
  reset = 0
  this.setState({
    count: reset
  })
}



render() {
  return(
    <>
  <div>
    <button onClick={this.increment}>button</button>
    
  </div>
  <div>
  <button onClick={this.decrement}>button</button>
</div>
<div>
<button onClick={this.reset}>button</button>
</div>
<div>
  {this.state.count}
</div>
</>
  )
}


}

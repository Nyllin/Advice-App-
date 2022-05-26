import axios from 'axios'
import React, { Component } from 'react'
import './App.css';
export class App extends Component {
    state = {
       advice: ''
    }

    componentDidMount(){
        this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((res)=>{
            const {advice} =res.data.slip;
            // console.log(res.data.slip.advice);
           this.setState({advice});
        }).catch((error)=>console.log(error));
    }

  render() {
      const {advice} = this.state;
    return (
      <div className='app'>
          <div className='card'>
              <h1 className='heading'>{advice}</h1>
              <button onClick={this.fetchAdvice} className='button'>
                <span>GIVE ME ADVICE!</span></button>          
          </div>
      </div>
    )
  }
}

export default App
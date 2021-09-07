import React, { Component } from "react";
import {ToastContainer, toast} from 'react-toastify'
const MyContext = React.createContext();
class MyProvider extends Component {
  state = {
    stage: 1,
    players: [],
    result: "",
  };


  addPlayer=(name)=>{
      this.setState((prevState)=>({
        players: [
            ...prevState.players,name
        ]
      }))

  }

  removePlayer=(name)=>{
    let arry=this.state.players;
    arry.splice(name,1);
    this.setState({players: arry});
  }
  nextHandler=()=>{
    const players =this.state.players;
    if(players.length>1){
      this.setState({stage:2},()=>{
        setTimeout(()=>{
          this.generateLooser()
        },2000)
      })
    }
    else{
      toast.error("you need one more player",{
        position: toast.POSITION.TOP_LEFT,
        autoClose:1500
      })
    }
  }

  generateLooser=()=>{
    const {players} = this.state;
    this.setState({
      result:players[Math.floor(Math.random()*players.length)]
    })
  }

  render() {
    return (
      <>
      <MyContext.Provider value={{
           state: this.state,
            addPlayer:this.addPlayer,
            removePlayer:this.removePlayer,
            next:this.nextHandler,
            getNewLooser: this.generateLooser,
            startOver:()=>{
              this.setState({stage:1,
                players:[],
                result:''
              })
            }
            }}>
        {this.props.children}
      </MyContext.Provider>
      <ToastContainer/>
      </>
    );
  }
}

export { MyContext, MyProvider };

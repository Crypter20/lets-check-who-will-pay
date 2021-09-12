import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { MyContext } from "./context";
import Stage1 from "./component/stage1";
import Stage2 from "./component/stage2";
class App extends React.Component {
  static contextType = MyContext;

  render() {
    return (
      <div className="Wrapper">
        <div className="center--wrapper">
          <h1> Who pays the bill? </h1>
          {this.context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
        </div>
      </div>
    );
  }
}

export default App;

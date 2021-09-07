import React,{useContext} from 'react';
import {MyContext} from '../context';
const Stage2=()=>{
    const context=useContext(MyContext);
    return <>
    <div className="result-wrapper">
        <h3>The Looser is:</h3>
        <div>{context.state.result} </div>
    </div>
    <div onClick={context.startOver} className="action-button ">StartOver</div>

    <div onClick={context.getNewLooser} className="action-button btn2">Get new Looser</div>
    </>
}

export default Stage2;
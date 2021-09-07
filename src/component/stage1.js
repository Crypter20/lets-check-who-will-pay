import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert } from "react-bootstrap";
import { MyContext } from "../context";
const Stage1 = () => {
  const [error, setError] = useState([false, ""]);
  const Input = useRef();
  const context = useContext(MyContext);

  function HandleSubmit(e) {
    e.preventDefault();
    const value = Input.current.value;
    const valid = validateInput(value);
    if (valid) {
      setError([false, ""]);
      context.addPlayer(value);
      Input.current.value = "";
    } else {
      console.log(error);
    }
  }
  function validateInput(value) {
    if (value === "") {
      setError([true, "Please add a player"]);
      return false;
    }
    if (value.length < 3) {
      setError([true, "Player name should be of minimum length 3"]);
      return false;
    }
    return true;
  }
  return (
    <>
      <Form onSubmit={HandleSubmit} className="mt-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add player name"
            name="player"
            ref={Input}
          />
        </Form.Group>
        {error[0] ? <Alert variant="danger">{error[1]}</Alert> : null}
        <Button className="btn1" variant="primary" type="submit">
          Add Player
        </Button>
      </Form>
      {context.state.players && context.state.players.length > 0 ? (
        <>
          <hr />
          <div>
            <ul className="list-group">
              {context.state.players.map((item, idx) => (
                <li key={idx} className="list-group-item d-flex justify-content-between align-items-center list-group-item-action" >
                  {item}
                  <button className="badge badge-danger"
                  onClick={()=>context.removePlayer(idx)} >x</button>
                </li>
              ))}
            </ul>
            <div className="action-button"
            onClick={context.next}
            >NEXT</div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Stage1;

import "./styles.css";
import styled from "styled-components";
import { useState } from "react";

const Contain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9d47ff;
  padding: 20px;
  border-radius: 9px;
  border: 2px solid white;
  box-shadow: 0 0 10px white;

  h1 {
    color: white;
  }

  button {
    background-color: #0000;
    margin-top: 15px;
    border: 2px solid white;
    border-radius: 9px;
    padding: 5px 15px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #b980ff;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: space-between;
  .btn1 {
    margin-right: 5px;
  }
  .btn2 {
    margin-left: 5px;
  }
`;

export default function App() {
  const [count, setCount] = useState(0);

  function Increase() {
    setCount(count + 1);
  }

  function Decrease() {
    setCount(count - 1);
  }

  return (
    <Contain>
      <Content>
        <h1>{count}</h1>
        <Buttons>
          <button className="btn1" onClick={Increase}>
            +
          </button>
          <button className="btn2" onClick={Decrease}>
            -
          </button>
        </Buttons>
      </Content>
    </Contain>
  );
}

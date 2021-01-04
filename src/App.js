import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";

const App = () => {
  const nums = useSelector((state) => state.buttons);
  const ops = useSelector((state) => state.ops);
  const [fnum, setFnum] = useState([]);
  const [snum, setSnum] = useState([]);
  const [flag, setFlag] = useState("");
  const [answer, setAnswer] = useState("");

  const reset = () => {
    setAnswer("");
    setFlag("");
    setSnum([]);
    setFnum([]);
  };
  const numsClick = (text) => {
    if (flag) {
      if (text === "=") {
        console.log("Not here");
      } else {
        setSnum([...snum, text]);
      }
    } else {
      if (text === "=") {
        console.log("Not here");
      } else {
        setFnum([...fnum, text]);
      }
    }
    if (text === "=" && flag) {
      switch (flag) {
        case "+":
          setAnswer(+fnum.join("") + +snum.join(""));
          break;
        case "-":
          setAnswer(+fnum.join("") - +snum.join(""));
          break;
        case "*":
          setAnswer(+fnum.join("") * +snum.join(""));
          break;
        case "/":
          setAnswer(+fnum.join("") / +snum.join(""));
          break;
        default:
          console.log("What is going on ?");
      }
    }
    if (text === "E") reset();
  };
  return (
    <div className="container">
      <Display fnum={fnum} snum={snum} op={flag} answer={answer} />
      <div className="buttons">
        <div className="nums">
          {nums.map((el, index) => {
            return (
              <Button
                click={(e) => numsClick(e.target.innerText)}
                text={el}
                key={index}
              />
            );
          })}
        </div>
        <div className="ops">
          {ops.map((el, index) => {
            return (
              <Button
                click={(e) => setFlag(e.target.innerText)}
                text={el}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

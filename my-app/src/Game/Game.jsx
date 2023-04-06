import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ResultPopup from "./ResultPopup";

function Game() {
  const [result, setResult] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [kqWin, setKqWin] = useState("WIN");
  const [countAll, setcountAll] = useState(0);
  const { url_1, url_2, url_3, count } = useSelector((state) => {
    const url_1 = state.changeXucXac1.url_1;
    const url_2 = state.changeXucXac2.url_2;
    const url_3 = state.changeXucXac3.url_3;
    const count = state.countWin.count;

    return { url_1, url_2, url_3, count };
  });
  const dispatch = useDispatch();
  function randonNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  const RotateXucXac = () => {
    let number1 = randonNumber();
    dispatch({ type: "numberXuc1", payload: number1 });
    // if ((number1 = 1)) {
    //   dispatch({ type: "Xuc1" });
    // } else if ((number1 = 2)) {
    //   dispatch({ type: "Xuc2" });
    // } else if ((number1 = 3)) {
    //   dispatch({ type: "Xuc3" });
    // } else if ((number1 = 4)) {
    //   dispatch({ type: "Xuc4" });
    // } else if ((number1 = 5)) {
    //   dispatch({ type: "Xuc5" });
    // } else if ((number1 = 6)) {
    //   dispatch({ type: "Xuc6" });
    // }

    let number2 = randonNumber();
    dispatch({ type: "numberXuc2", payload: number2 });
    // if ((number2 = 1)) {
    //   dispatch({ type: "Xuc2_1" });
    // } else if ((number2 = 2)) {
    //   dispatch({ type: "Xuc2_2" });
    // } else if ((number2 = 3)) {
    //   dispatch({ type: "Xuc2_3" });
    // } else if ((number2 = 4)) {
    //   dispatch({ type: "Xuc2_4" });
    // } else if ((number2 = 5)) {
    //   dispatch({ type: "Xuc2_5" });
    // } else if ((number2 = 6)) {
    //   dispatch({ type: "Xuc2_6" });
    // }

    let number3 = randonNumber();
    dispatch({ type: "numberXuc3", payload: number3 });

    // if ((number3 = 1)) {
    //   dispatch({ type: "Xuc3_1" });
    // } else if ((number3 = 2)) {
    //   dispatch({ type: "Xuc3_2" });
    // } else if ((number3 = 3)) {
    //   dispatch({ type: "Xuc3_3" });
    // } else if ((number3 = 4)) {
    //   dispatch({ type: "Xuc3_4" });
    // } else if ((number3 = 5)) {
    //   dispatch({ type: "Xuc3_5" });
    // } else if ((number3 = 6)) {
    //   dispatch({ type: "Xuc3_6" });
    // }
    setcountAll(countAll + 1);
    let ketquaWin = number1 + number2 + number3;
    if (ketquaWin % 2 === 0 && result == "TÀI") {
      setKqWin("WIN");
      dispatch({ type: "increment" });
    } else if (ketquaWin % 2 === 1 && result == "XỈU") {
      setKqWin("WIN");
      dispatch({ type: "increment" });
    } else {
      setKqWin("LOSE");
      dispatch({ type: "decrement" });
    }
    setIsOpen(true);
  };

  return (
    <div className="background-img">
      <h1 className="text-center p-5 font">GAME ĐỔ XÚC XẮC</h1>
      <div className="row text-center row-beside">
        <div className="col-3">
          <button
            className="big-size"
            onClick={() => {
              setResult("TÀI");
            }}
          >
            TÀI
          </button>
        </div>
        <div className="col-6">
          <img src={url_1} className="size-img"></img>
          <img src={url_2} className="size-img"></img>
          <img src={url_3} className="size-img"></img>
        </div>
        <div className="col-3">
          <button
            className="big-size"
            onClick={() => {
              setResult("XỈU");
            }}
          >
            XỈU
          </button>
        </div>
      </div>
      <div className="text-center">
        <button>50.000đ</button>
        <button>100.000đ</button>
        <button>200.000đ</button>
        <button>500.000đ</button>
      </div>
      <ResultPopup
        kqWin={kqWin}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="text-center mt-3">
        <div>
          <h2>BẠN CHỌN: {result} </h2>
          <p>SỐ BÀN THẮNG: {count}</p>
          <p>TỔNG SỐ BÀN CHƠI:{countAll}</p>
        </div>
        <button onClick={RotateXucXac}>PLAY GAME</button>
      </div>
    </div>
  );
}

export default Game;

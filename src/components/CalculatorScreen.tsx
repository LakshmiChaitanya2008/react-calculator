import React, { useState } from "react";
import CalcButtons from "./CalcButtons";

function CalculatorScreen() {
  const [eq, setEq] = useState("");

  return (
    <>
      <div className="CalculatorScreen">
        <br />
        <span className="calcNumbers">{eq}</span>
      </div>
      <CalcButtons eq={eq} setEq={setEq} />
    </>
  );
}

export default CalculatorScreen;

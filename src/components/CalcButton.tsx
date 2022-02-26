import React, { useState } from "react";

interface CalcButtonProps {
  number: number | string;
  setEq: React.Dispatch<React.SetStateAction<string>>;
  eq: string;
}

export default function CalcButton({ number, setEq, eq }: CalcButtonProps) {
  const computeNumbers = function () {
    if (typeof number === "number") {
      setEq(eq + number);
    } else if (number === "=") {
      setEq(eval(eq));
    } else if (number === "AC") {
      setEq("");
    } else {
      setEq(eq + " " + number + " ");
    }
  };

  return (
    <div className="CalcButton" onClick={computeNumbers}>
      <span className="number">{number}</span>
    </div>
  );
}

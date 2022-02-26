import React, { useState } from "react";
import CalcButton from "./CalcButton";
interface CalcButtonsProps {
  setEq: React.Dispatch<React.SetStateAction<string>>;
  eq: string;
}
export default function CalcButtons({ setEq, eq }: CalcButtonsProps) {
  const numberArr = [
    "AC",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    "+",
    "-",
    "*",
    "/",
    "=",
  ];

  return (
    <div className="CalcButtons">
      {numberArr.map((el) => (
        <CalcButton number={el} key={el} setEq={setEq} eq={eq} />
      ))}
    </div>
  );
}

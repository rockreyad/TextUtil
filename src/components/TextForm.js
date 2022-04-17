import React, { useState } from "react";
import Button from "../Button";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [colorStyle, setColorStyle] = useState();

  const toggleStyle = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColorStyle({
      color: "white",
      backgroundColor: "#" + randomColor,
    });

    props.showAlert("Random Color has been Applied","Success","green")
  };
  const upperCase = () => {
    setText("You have to clicked on HandleUpClick");
    
    props.showAlert("Text has been converted into UPPERCASE","Success","green")
    const string = text.toUpperCase();
    setText(string);
  };
  const lowerCase = () => {
    setText("You have to clicked on HandleUpClick");
    
    props.showAlert("Text has been converted into lowercase","Success","green")
    const string = text.toLowerCase();
    setText(string);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="items-center">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl text-rose-500">{props.heading}</h1>
          <textarea
            style={colorStyle}
            className="bg-violet-500 text-white rounded h-52 outline-none shadow hover:bg-orange-200 hover:text-gray-800 p-3"
            rows="5"
            value={text}
            onChange={handleOnChange}
            placeholder="Type or Paste your content here"
          ></textarea>
          <div className="flex flex-row">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={upperCase}
            >
              UpperCase
            </button>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={lowerCase}
            >
              LowerCase
            </button>
            <Button buttonName="Clear" />
            <button
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={toggleStyle}
            >
              Random Color
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col space-y-2 my-2 text-${
          props.mode == "rose-500" ? "black" : "white"
        }`}
      >
        <h2 className="text-orange-600 text-bold text-2xl">Text Summary</h2>
        <p className="font-semibold">
          <span className="font-light">{text.split(" ").length} </span>
          words ,<span className="font-light"> {text.length} </span> characters
        </p>
        <p className="font-light">
          {0.008 * text.split(" ").length} Mintues to read
        </p>
      </div>
    </>
  );
}

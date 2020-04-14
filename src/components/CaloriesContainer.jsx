import React, { useState, useReducer, useEffect } from "react";
import Calories from "./Calories";
import { motion } from "framer-motion";

export default function CaloriesContainer(props) {
  const [weightPlaceholder, setWeightPlaceHolder] = useState("Pounds");
  const [isValid, setIsValid] = useState(false);
  const [heightPlaceholder, setHeightPlaceHolder] = useState(
    "Feet Inches ex. 6.2"
  );
  const [selectValue, setSelectValue] = useState("select");
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      age: "",
      weight: "",
      height: "",
      sex: "",
      unit: "us",
      activity: "select",
    }
  );

  useEffect(() => {
    const validate = () => {
      if (
        !userInput.age ||
        !userInput.weight ||
        !userInput.height ||
        userInput.activity === "select" ||
        isNaN(userInput.age) ||
        isNaN(userInput.weight) ||
        isNaN(userInput.height)
      ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    };
    validate();
  }, [userInput]);

  // Changes Height and Weight inputs' placeholders
  const changePlaceHolders = (e) => {
    if (e.target.value === "metric") {
      setHeightPlaceHolder("Centimeters");
      setWeightPlaceHolder("Kilograms");
    } else {
      setHeightPlaceHolder("Feet Inches ex. 6.2");
      setWeightPlaceHolder("Pounds");
    }
  };

  // Changes the states to the user's inputs
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "unit") {
      changePlaceHolders(e);
    } else if (name === "activity") {
      setSelectValue(value);
    }
    setUserInput({ [name]: value });
  };

  // Changes Parent's State and checks
  const handleClick = () => {
    props.onClick(userInput);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-100 w-100"
    >
      <Calories
        onChange={handleChange}
        onClick={handleClick}
        isValid={isValid}
        select={selectValue}
        weightPlaceholder={weightPlaceholder}
        heightPlaceholder={heightPlaceholder}
      />
    </motion.div>
  );
}

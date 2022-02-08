import React, { useState } from "react";
// import { Link } from "react-router-dom";

// Creating a custom hook
function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  function onChange(e) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}

export default function Home() {
  const inputProps = useInput();
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Shorten the URL</h1>
      <div>
        <input {...inputProps} placeholder="Enter long url" />
        <span>Value: {inputProps.value} </span>
      </div>
      <button variant="raised">ENTER</button>
    </div>
  );
}

import React, { useState, useEffect, useRef } from "react";

const AutoCompleteInput = ({ data = [], hint = "Enter text" }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputValue && Array.isArray(data)) {
      const matchedCity = data.find((city) =>
        city.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setSuggestion(matchedCity || "");
    } else {
      setSuggestion("");
    }
  }, [inputValue, data]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab" && suggestion) {
      e.preventDefault();
      setInputValue(suggestion);
    }
  };

  return (
    <div className="relative w-64">
      <label
        htmlFor="input"
        className="block mb-4 text-sm font-medium text-gray-700"
      >
        {hint}
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          id="input"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded-lg shadow-lg appearance-none outline-none  focus:shadow-indigo"
          placeholder="Type a city name..."
        />
        {suggestion && (
          <div className="absolute left-0 top-0 w-full px-3 py-2 text-sm pointer-events-none">
            <span className="text-transparent">{inputValue}</span>
            <span className="text-gray-400">
              {suggestion.slice(inputValue.length)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoCompleteInput;

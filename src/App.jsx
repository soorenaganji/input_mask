import React from "react";
import AutoCompleteInput from "./Input";
import citiesData from "./cities.json";

function App() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-6 bg-white rounded-lg shadow-lg border border-indigo-500">
          <h1 className="text-2xl font-semibold mb-4">City Autocomplete</h1>
          <AutoCompleteInput data={citiesData} hint="Enter a city name" />
        </div>
      </div>
      <footer className="w-full text-center text-xl pb-4 ">
        <p>Created With ❤️ By Sourena Ganji</p>
      </footer>
    </>
  );
}

export default App;

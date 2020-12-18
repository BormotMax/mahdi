import React, { useState } from 'react';
import { ReactQueryDevtools } from "react-query/devtools";
import './App.css';
import { TravelPolicies } from './TravelPolicies';


function App() {
  const [isAdding, setIsAdding] = useState(false);
  const handleClick = () => {
    setIsAdding((prevState) => !prevState);
  };

  return (
    <>
      <div className="sm:container mx-auto h-screen p-4 sm:px-8 md:px-20 lg:px-36 pt-4 font-inter bg-primary relative overflow-x-hidden">
        <div className="flex justify-between w-100% mb-14">
          <h2 className="text-5xl font-semibold">Travel Policy</h2>
          <button
            type="button" 
            className="px-10 text-white bg-secondary flex items-center rounded-lg focus:outline-none"
            onClick={handleClick}
          >
            <span className="text-2xl font-bold">+ Add new travel policy</span>
          </button>
        </div>
        <TravelPolicies isAdding={isAdding} onClick={handleClick}/>
      </div>

      {/* <ReactQueryDevtools initialIsOpen />  devtools for query cache*/}
    </>
  );
}

export default App;

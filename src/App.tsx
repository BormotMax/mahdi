import React, { useState } from 'react';
import { AddNewTravelPolicy } from './AddNewTravelPolicy';
import './App.css';

function App() {
  const [isAdding, setIsAdding] = useState(false);
  const handleClick = () => {

    setIsAdding((prevState) => !prevState);
    // const data = await (await fetch('http://localhost:3001/posts/')).json();
    console.log(isAdding);
  };
  return (
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
      <div className="container bg-white px-14 py-10 rounded-xl border border-primary">
        <h3 className="text-3xl font-semibold mb-6">No Travel Policy</h3>
        <p className="font-normal text-2xl text-secondary">in case you didn't set up a travel policy, travellers will book without budget restrictions.</p>
      </div>
      <AddNewTravelPolicy isOpened={isAdding} onClick={handleClick}/>
    </div>
  );
}

export default App;

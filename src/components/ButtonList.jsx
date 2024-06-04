import React from "react";

const buttonArray = [
  "All",
  "Gaming",
  "Cricket",
  "Music",
  "Movie",
  "coding",
  "Bollywood",
  "News",
  "Self help",
  "Tv Shows",
  "Elections"
];
const ButtonList = () => {
  return (
    <div className="space-x-4 pt-2">
      {buttonArray.map((button, index) => (
        <button className="bg-gray-200 min-w-20 transition-all duration-300 hover:bg-gray-400 font-semibold hover:text-gray-800 p-2 rounded-lg"  key={index}>{button}</button>
      ))}
    </div>
  );
};

export default ButtonList;

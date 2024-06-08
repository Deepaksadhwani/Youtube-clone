import { toggleMenu } from "@/store/Slices/appSlice";
import { cacheResults } from "@/store/Slices/searchSlice";
import { YOUTUBE_SEARCH_API } from "@/utils/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const data = await response.json();
    setSuggestionList(data[1]);
    dispatch(cacheResults({ [searchQuery] : data[1] }));

    // [searchQuery] for setting key as value if you do not put bracket it will not treat as searchQuery value it will treat it as "searchQuery" string if you want dynamically we use [] in object, 

    //Example


    //     const searchQuery = "apple";
    // const data = ["Apple Inc.", "Technology"];

    // Without brackets
    // const stateUpdate1 = { searchQuery: data };
    // console.log(stateUpdate1);
    // Output: { searchQuery: ["Apple Inc.", "Technology"] }

    // With brackets (computed property key)
    // const stateUpdate2 = { [searchQuery]: data };
    // console.log(stateUpdate2);
    // Output: { apple: ["Apple Inc.", "Technology"] }

  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestionList(searchCache[searchQuery]);  
      } else {
        getSearchSuggestions();
      }
    }, 200);

    //when component is re-render or destroy it will call this return as well
    // like we someone type "i" in input search bar before 200ms happen user type "ip" it will destroy component or re-render our it again trigger reconciliation cycle   to complete setTimeOut it goes in event loop or and so this  "return" will be executing when function is unmounting and it will let setTimeOut clear Up and make it work

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="flex h-16 items-center justify-between bg-white px-10 pt-2 shadow-lg">
      <div className="flex space-x-5">
        <img
          className="h-8 cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={() => dispatch(toggleMenu())}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/207px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <div className="flex h-8 items-center space-x-1 rounded-full bg-gray-100 p-2 text-xl tracking-tighter">
          <img
            className="h-8"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Yrt193MGUwXRsPB4tCgSzlsMfZzhAhdoWQ&s"
          />
          <h1>WeTube</h1>
        </div>
      </div>

      <div className="relative flex items-center justify-evenly rounded-full border border-gray-400 px-2 py-1 text-xl">
        <input
          value={searchQuery}
          onFocus={() => setShowSuggestion(true)}
          onBlur={() => setShowSuggestion(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="cursor-default rounded-full px-2 py-1 focus:outline-none"
          type="text"
          placeholder="Search..."
        />
        <button className="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        {showSuggestion && (
          <div className="absolute top-0  z-10 mt-10 w-full rounded-lg bg-white shadow-md">
            <ul className=" border  ">
              {suggestionList.map((suggestion) => (
                <li key={suggestion} className="px-4 py-2 hover:bg-gray-100">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <img
        className="h-10 rounded-lg"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        alt="user icon"
      />
    </div>
  );
};

export default NavBar;

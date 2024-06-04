import { Button } from "@/components/ui/button";
import { toggleMenu } from "@/store/Slices/appSlice";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex h-16 items-center justify-between bg-white px-10 pt-2 shadow-lg">
      <div className="flex space-x-5">
        <img
          className="h-8 cursor-pointer hover:scale-110 transition-all duration-300"
          onClick={()=> dispatch(toggleMenu())}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/207px-Hamburger_icon.svg.png"
          alt="menu"
        />
        <div className="flex h-8 text-xl tracking-tighter space-x-1 bg-gray-100 p-2 rounded-full    items-center">
          <img
            className="h-8 "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Yrt193MGUwXRsPB4tCgSzlsMfZzhAhdoWQ&s"

          />
           <h1>WeTube</h1>
        </div>
       
      </div>

      <div className="flex items-center justify-evenly rounded-full border p-2">
        <input className="border border-gray-400  " type="text" />
        <button className="border border-gray-400">🔍</button>
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

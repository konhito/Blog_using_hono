import { Avatar } from "./BlogCard";

const Appbar = () => {
  return (
    <div className="border-b flex justify-between items-center px-4 py-2 bg-white">
      {/* Left Section */}
      <div className="font-semibold text-2xl cursor-pointer pl-4">MEDIUM</div>

      {/* Right Section */}
      <div className="flex items-center gap-10">
        {/* Button */}
        <button className="px-4 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-600 focus:outline-none">
          Publish
        </button>

        {/* Icon */}
        <div className="text-xl  font-bold cursor-pointer" aria-hidden="true">
          •••
        </div>

        <Avatar authorInitials="Aditya" size={10} />
      </div>
    </div>
  );
};


export default Appbar;

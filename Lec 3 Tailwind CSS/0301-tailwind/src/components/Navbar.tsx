function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 pl-8 pr-8 flex justify-between items-center">
      <div className="text-white text-3xl font-bold mr-8">Logo</div>
      <ul className="flex m-0 p-0 list-none space-x-10">
        <li className="text-white hover:text-gray-400">Home</li>
        <li className="text-white hover:text-gray-400">About</li>
        <li className="text-white hover:text-gray-400">Contact</li>
      </ul>
      <button className="bg-blue-600 text-white p-2 rounded cursor-pointer hover:bg-blue-800 ml-8">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
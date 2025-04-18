function Navbar() {
    return (
      <nav className="flex flex-col sm:flex-row items-center p-4 gap-y-4 sm:gap-y-0 sm:gap-x-4 bg-gray-700">
        <div className="text-3xl font-bold">Logo</div>

        <ul className="flex flex-col sm:flex-row items-center gap-y-4 sm:gap-y-0 sm:gap-x-4 ">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
  
        <button>Login</button>
      </nav>
    );
  }

export default Navbar;
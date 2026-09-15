import Logo from "../assets/logo-text.png"

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">

        {/* Mobile Menu Button */}
        <button className="text-2xl md:hidden">
          ☰
        </button>

        {/* Brand */}
        <div>
          <img src={Logo} alt="" />
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Home
          </a>

          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Technologies
          </a>

          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Projects
          </a>

          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            About
          </a>

          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </div>

        {/* Authentication */}
        <div className="flex items-center gap-2">
          <button className="hidden text-sm font-medium text-gray-700 sm:block">
            Sign In
          </button>

          <button className="rounded-full bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
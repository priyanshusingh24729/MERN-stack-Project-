import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#0b1220] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold text-green-400">FreelanceHub</h1>

        {/* Menu */}
        <div className="flex items-center gap-6 text-gray-300">
          <Link to="/explore" className="text-red-500 cursor-pointer">
            Explore
          </Link>
          <Link to="/order" className="hover:text-white cursor-pointer">Orders</Link>
          <span className="hover:text-white cursor-pointer">Messages</span>
          <span className="hover:text-white cursor-pointer">Dashboard</span>
          <Link to="/login" className="text-red-500 cursor-pointer">
            Login
          </Link>
          <Link to="/register" className="text-gray-400">
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
}

// components/Navbar.js
'use client'

import { useState } from 'react';
import Link from 'next/link';

const NavbarV2 = ({ user }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white text-lg font-bold">
            Glitz Bd
          </Link>
        </div>
        <div>
          {user ? (
            <div className="relative">
              <button onClick={toggleDropdown} className="flex items-center text-white">
                <img src="/next.svg" alt="User Icon" className="w-8 h-8 rounded-full"/>
                <span className="ml-2">{user.email}</span>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
                  <Link href="/profile"className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Profile
                  </Link>
                  <Link href="/cart"className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Cart
                  </Link>
                  <Link href="/orders" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                    Orders
                  </Link>
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link className="text-white mx-2" href="/signin">
                Sign In
              </Link>
              <Link href="/signup" className="text-white mx-2">Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const handleLogout = () => {
  // Implement logout functionality
};

export default NavbarV2;

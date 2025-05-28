import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Card className="flex flex-col  rounded-xl  md:flex-row md:items-center md:justify-between rounded-xl  gap-4 border-b-0 rounded-b-none rounded-t-lg shadow-none rounded-xl ">
      <div className="flex items-center gap-4 flex-1">
        <nav className="text-xs text-gray-400 flex items-center gap-2">
          <span className="hover:underline cursor-pointer">Requests</span>
          <span className="mx-1">/</span>
          <span className="hover:underline cursor-pointer text-gray-500">Registration</span>
        </nav>
        <div className="flex-1 flex items-center ml-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-xs px-4 py-2 border border-gray-200 rounded-lg bg-[#F6F8FA] text-sm focus:outline-none focus:ring-2 focus:ring-[#4CB7A7]"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" className="text-[#4CB7A7] px-2">En</Button>
        <Button variant="ghost" size="sm" className="relative px-2">
          <span role="img" aria-label="bell">🔔</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">1</span>
        </Button>
        <div className="relative">
          <button
            className="flex items-center gap-2 px-2 py-1 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsOpen((v) => !v)}
          >
            <img src="https://i.pravatar.cc/32?img=3" alt="User" className="rounded-full w-8 h-8 border" />
            <span className="font-medium text-gray-700 text-sm">John Doe</span>
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Header;
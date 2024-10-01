import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaHome, FaUsers, FaHardHat, FaChartBar, FaBoxes } from 'react-icons/fa'

const menuItems = [
  { icon: FaHome, text: 'Dashboard', path: '/' },
  { icon: FaUsers, text: 'Vendor Management', path: '/vendors' },
  { icon: FaHardHat, text: 'Civil Project Management', path: '/projects' },
  { icon: FaChartBar, text: 'Vendor Performance', path: '/reports' },
  { icon: FaBoxes, text: 'Materials Inventory', path: '/inventory' },
]

function Sidebar() {
  const location = useLocation()

  return (
    <nav className="bg-blue-800 text-white w-full sm:w-64 p-4 sm:h-screen">
      <div className="flex sm:flex-col space-x-4 sm:space-x-0 sm:space-y-6">
        <div className="text-4xl font-bold mb-6 hidden sm:block">LOGO</div>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center p-2 rounded-md hover:bg-blue-700 ${
              location.pathname === item.path ? 'bg-blue-700' : ''
            }`}
          >
            <item.icon size={20} />
            <span className="ml-2 hidden sm:inline">{item.text}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Sidebar
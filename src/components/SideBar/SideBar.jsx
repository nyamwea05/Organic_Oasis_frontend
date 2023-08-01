import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import DropdownMenu from './DropdownMenu';

const Sidebar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-title">Categories</div>
      <div className="sidebar-list">
        <li className="sidebar-item" onClick={handleToggleDropdown}>
          Categories
          {isDropdownOpen && <DropdownMenu />}
        </li>
        {/* Add other category links directly */}
        <li className="sidebar-item">
          <Link to="/meat">Meat</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/beverages">Beverages</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/bakery">Bakery</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/fruits">Fruits</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/vegetables">Vegetables</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/spice">Spice</Link>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;

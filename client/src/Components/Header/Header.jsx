import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import { LayoutDashboard, FileText, CalendarDays, MessageCircle, Settings, ClipboardCheck, BellDot, User, ShieldCheck } from 'lucide-react';
import './header.css';

const navItems = [
  { text: 'Reception', icon: <LayoutDashboard strokeWidth={1.5} />, path: '/reception' },
  { text: 'Transcription', icon: <FileText strokeWidth={1.5} />, path: '/transcription' },
  { text: 'PACS', icon: <CalendarDays strokeWidth={1.5} />, path: '/pacs' },
  { text: 'Management', icon: <MessageCircle strokeWidth={1.5} />, path: '/management' },
  { text: 'Billing', icon: <Settings strokeWidth={1.5} />, path: '/billing' },
  { text: 'Administration', icon: <ShieldCheck size={20} strokeWidth={1.5} />, path: '/administration' }
];

function Header() {
  const [activeItem, setActiveItem] = useState(0);
  const location = useLocation(); // Get the current route

  useEffect(() => {
    // Find the index of the current route in the navItems array
    const index = navItems.findIndex(item => item.path === location.pathname);
    if (index !== -1) {
      setActiveItem(index); // Set the active item based on the route
    }
  }, [location]);

  return (
    <div className='header-container'>
      <div className="header-wrapper">
        <p>Test header</p>
        <div className="nav-menu">
          <ul className='nav-menu-list'>
            {navItems.map((item, index) => (
              <li
                key={index}
                className={`nav-menu-items ${index === activeItem ? 'active' : ''}`}
                onClick={() => setActiveItem(index)}
              >
                <Link to={item.path} className="nav-item-content">
                  {item.icon}
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-button-wrapper">
          <div className="nav-button-list">
            <div className="nav-button-items">
              <ClipboardCheck size={20} strokeWidth={1.5} />
            </div>
            <div className="nav-button-items">
              <BellDot strokeWidth={1.5} size={20} />
            </div>
            <div className="nav-button-items-active">
              <User strokeWidth={1.5} size={20} color="#ffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
 
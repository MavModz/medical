import React, { useState } from 'react';
import { LayoutDashboard, FileText, CalendarDays, MessageCircle, Settings, Phone, BellDot, User } from 'lucide-react';
import './header.css';

function Header() {

    const [activeItem, setActiveItem] = useState(0);

    const handleItemClick = (index) => {
        setActiveItem(index);
    };

    return (
        <div className='header-container'>
            <div className="header-wrapper">
                <p>Test header</p>
                <div className="nav-menu">
                    <ul className='nav-menu-list'>
                        {[
                            { text: 'Dashboard', icon: <LayoutDashboard strokeWidth={1.5} /> },
                            { text: 'Reports', icon: <FileText strokeWidth={1.5} /> },
                            { text: 'Calendar', icon: <CalendarDays strokeWidth={1.5} /> },
                            { text: 'Chat', icon: <MessageCircle strokeWidth={1.5} /> },
                            { text: 'Settings', icon: <Settings strokeWidth={1.5} /> }
                        ].map((item, index) => (
                            <li
                                key={index}
                                className={`nav-menu-items ${index === activeItem ? 'active' : ''}`}
                                onClick={() => handleItemClick(index)}
                            >
                                <div className="nav-item-content">
                                    {item.icon}
                                    {item.text}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="nav-button-wrapper">
                    <div className="nav-button-list">
                        <div className="nav-button-items">
                            <Phone strokeWidth={1.5} size={20} />
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
    )
}

export default Header
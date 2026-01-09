import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaDumbbell, FaUsers, FaEnvelope, FaGem } from 'react-icons/fa';

const MobileNavbar = () => {
    return (
        <div className="mobile-navbar-container d-lg-none position-fixed bottom-0 start-0 w-100 bg-black border-top border-secondary z-3">
            <div className="d-flex justify-content-around align-items-center py-2">
                <NavLink to="/" className={({ isActive }) => `mobile-nav-item d-flex flex-column align-items-center text-decoration-none ${isActive ? 'active' : ''}`}>
                    <FaHome size={20} />
                    <span>Home</span>
                </NavLink>
                <NavLink to="/programs" className={({ isActive }) => `mobile-nav-item d-flex flex-column align-items-center text-decoration-none ${isActive ? 'active' : ''}`}>
                    <FaDumbbell size={20} />
                    <span>Workouts</span>
                </NavLink>
                <NavLink to="/trainers" className={({ isActive }) => `mobile-nav-item d-flex flex-column align-items-center text-decoration-none ${isActive ? 'active' : ''}`}>
                    <FaUsers size={20} />
                    <span>Trainers</span>
                </NavLink>
                <NavLink to="/memberships" className={({ isActive }) => `mobile-nav-item d-flex flex-column align-items-center text-decoration-none ${isActive ? 'active' : ''}`}>
                    <FaGem size={20} />
                    <span>Join</span>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `mobile-nav-item d-flex flex-column align-items-center text-decoration-none ${isActive ? 'active' : ''}`}>
                    <FaEnvelope size={20} />
                    <span>Contact</span>
                </NavLink>
            </div>
            <style>
                {`
                    .mobile-navbar-container {
                        box-shadow: 0 -5px 15px rgba(0,0,0,0.5);
                        padding-bottom: env(safe-area-inset-bottom);
                    }
                    .mobile-nav-item {
                        color: #888;
                        font-size: 0.65rem;
                        font-weight: 500;
                        transition: all 0.3s ease;
                        flex: 1;
                    }
                    .mobile-nav-item svg {
                        margin-bottom: 2px;
                    }
                    .mobile-nav-item.active {
                        color: var(--primary-color);
                    }
                    .mobile-nav-item span {
                        text-transform: uppercase;
                        letter-spacing: 0.5px;
                    }
                `}
            </style>
        </div>
    );
};

export default MobileNavbar;

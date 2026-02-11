import { Home, Search, Library } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="mobile-nav">
            <div
                className={`mobile-nav-item ${isActive('/') ? 'active' : ''}`}
                onClick={() => navigate('/')}
            >
                {isActive('/') ? <Home size={26} fill="currentColor" /> : <Home size={26} />}
                <span>Home</span>
            </div>
            <div
                className={`mobile-nav-item ${isActive('/search') ? 'active' : ''}`}
                onClick={() => navigate('/search')}
            >
                {isActive('/search') ? <Search size={26} strokeWidth={3} /> : <Search size={26} />}
                <span>Search</span>
            </div>
            <div
                className={`mobile-nav-item ${location.pathname.includes('/library') ? 'active' : ''}`}
                onClick={() => navigate('/')} // Keeping it for demo
            >
                <Library size={26} />
                <span>Your Library</span>
            </div>
        </nav>
    );
};

export default MobileNav;

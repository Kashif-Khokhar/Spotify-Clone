import { ChevronLeft, ChevronRight, Bell, Users, Search, Home as HomeIcon, LayoutGrid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();

    return (
        <div className="topbar">
            <div className="topbar-left">
                <button className="nav-btn" onClick={() => navigate(-1)}>
                    <ChevronLeft size={20} />
                </button>
                <button className="nav-btn" onClick={() => navigate(1)}>
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="topbar-center">
                <button className="home-search-nav-btn" onClick={() => navigate('/')}>
                    <HomeIcon size={20} />
                </button>
                <div className="search-input-wrapper-refined">
                    <Search className="search-icon-inside" size={20} />
                    <input
                        type="text"
                        className="search-input-exact"
                        placeholder="What do you want to play?"
                        onFocus={() => navigate('/search')}
                        onClick={() => navigate('/search')}
                    />
                    <div className="search-shortcut">
                        <span>Ctrl K</span>
                        <LayoutGrid size={16} />
                    </div>
                </div>
            </div>

            <div className="topbar-right">
                <button className="premium-btn-refined">Explore Premium</button>
                <button className="icon-btn-refined">
                    <Bell size={20} />
                </button>
                <button className="icon-btn-refined">
                    <Users size={20} />
                </button>
                <button className="profile-btn-refined">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop" alt="User" />
                </button>
            </div>
        </div>
    );
};

export default TopBar;

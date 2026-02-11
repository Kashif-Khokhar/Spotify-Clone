import { Bell, Clock, Settings } from 'lucide-react';
import SpotifyLogo from './SpotifyLogo';

interface MobileHeaderProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ activeFilter, onFilterChange }) => {
    return (
        <header className="mobile-header">
            <div className="mobile-header-top">
                <div className="mobile-user-section">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                        alt="Profile"
                        className="mobile-profile-img"
                    />
                    <SpotifyLogo size={28} className="mobile-logo-margin" />
                </div>
                <div className="mobile-header-actions">
                    <button className="mobile-header-icon">
                        <Bell size={24} />
                    </button>
                    <button className="mobile-header-icon">
                        <Clock size={24} />
                    </button>
                    <button className="mobile-header-icon">
                        <Settings size={24} />
                    </button>
                </div>
            </div>
            <div className="mobile-header-filters">
                {['All', 'Music', 'Podcasts'].map((filter) => (
                    <button
                        key={filter}
                        className={`mobile-filter-chip ${activeFilter === filter ? 'active' : ''}`}
                        onClick={() => onFilterChange(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default MobileHeader;

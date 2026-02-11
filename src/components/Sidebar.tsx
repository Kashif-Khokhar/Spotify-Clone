import { Home, Search, Library, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SpotifyLogo from './SpotifyLogo';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&auto=format&fit=crop&q=60";
    };

    const artists = [
        { name: "AP Dhillon", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=100&h=100&fit=crop" },
        { name: "The Weeknd", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop" },
        { name: "Sidhu Moose Wala", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=100&h=100&fit=crop" },
        { name: "Drake", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=100&h=100&fit=crop" },
        { name: "Diljit Dosanjh", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=100&h=100&fit=crop" },
    ];

    return (
        <div className="sidebar-condensed">
            <div className="sidebar-logo-container" onClick={() => navigate('/')}>
                <SpotifyLogo size={32} />
            </div>

            <div className="sidebar-top-condensed">
                <div className="nav-item-condensed active" onClick={() => navigate('/')}>
                    <Home size={28} />
                </div>
                <div className="nav-item-condensed" onClick={() => navigate('/search')}>
                    <Search size={28} />
                </div>
            </div>

            <div className="sidebar-library-condensed">
                <div className="library-header-condensed" onClick={() => navigate('/search')}>
                    <Library size={28} />
                </div>

                <div className="library-actions-condensed">
                    <button className="plus-btn" onClick={() => alert('Create Playlist feature coming soon!')}>
                        <Plus size={20} />
                    </button>
                </div>

                <div className="library-scroll-condensed">
                    <div className="artist-avatar-mini liked-songs-item" onClick={() => navigate('/playlist/liked-songs')}>
                        <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=100&fit=crop" alt="Liked" />
                    </div>
                    {artists.map((artist, i) => (
                        <div key={i} className="artist-avatar-mini" onClick={() => navigate(`/playlist/artist-${i}`)}>
                            <img src={artist.image} alt={artist.name} onError={handleImageError} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

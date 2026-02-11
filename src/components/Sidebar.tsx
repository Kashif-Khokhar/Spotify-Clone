import { Home, Search, Library, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
                <svg viewBox="0 0 24 24" className="spotify-logo-svg">
                    <circle cx="12" cy="12" r="12" fill="#1DB954" />
                    <path d="M17.35 15.39c-.21.34-.65.45-1 .24-2.31-1.41-5.23-1.72-8.66-.94-.39.09-.78-.16-.87-.55-.09-.39.16-.78.55-.87 3.75-.86 7-.5 9.58 1.08.35.22.45.66.24.99-.01.05-.01.05 0 0zm1.34-2.89c-.27.43-.83.57-1.26.3-2.65-1.63-6.68-2.1-9.8-1.15-.49.15-.99-.12-1.14-.61-.15-.49.12-.99.61-1.14 3.56-1.08 8.01-.56 11.08 1.33.43.27.57.83.3 1.26l.21-.13zm.13-3.11C15.19 7.22 9.07 7.01 5.53 8.1c-.54.16-1.11-.14-1.27-.68-.16-.54.14-1.11.68-1.27 4.07-1.23 10.84-1 14.97 1.45.49.29.64.92.35 1.4-.29.49-.92.64-1.41.35l-.03.04z" fill="black" />
                </svg>
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

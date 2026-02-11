import { Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60";
    };

    const recentItems = [
        { title: "Low Rider", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=56&h=56&fit=crop" },
        { title: "Excuse Me Radio", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=56&h=56&fit=crop" },
        { title: "My playlist #1", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=56&h=56&fit=crop" },
        { title: "Four You", image: "https://images.unsplash.com/photo-1514525253361-bee8a187499b?w=56&h=56&fit=crop" },
        { title: "The Simpsons", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=56&h=56&fit=crop" },
        { title: "Daily Mix 1", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=56&h=56&fit=crop" },
        { title: "Soulful Songs Of Rahat Fateh Ali Khan", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=56&h=56&fit=crop" },
        { title: "Nimra Mehra", image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=56&h=56&fit=crop" },
    ];

    const madeFor = [
        { title: "Discover Weekly", desc: "Your shortcut to hidden gems, deep...", image: "https://images.unsplash.com/photo-1514525253361-bee8a187499b?w=500&auto=format&fit=crop" },
        { title: "Karan Aujla, Diljit Dosanjh, Prem Dhillo...", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500&auto=format&fit=crop" },
        { title: "Shubh, Real Boss, Sultaan and more", image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?w=500&auto=format&fit=crop" },
        { title: "Sidhu Moose Wala, AP Dhillon, Bhalwaan an...", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop" },
        { title: "Jagjit Singh, Rahat Fateh Ali Khan, Prita...", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=500&auto=format&fit=crop" },
    ];

    const jumpBackIn = [
        { title: "Punjabi Hits", desc: "The biggest Punjabi songs right now.", image: "https://images.unsplash.com/photo-1514525253361-bee8a187499b?w=300&h=300&fit=crop" },
        { title: "Mega Hit Mix", desc: "A mega mix of 75 hits you'll love.", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop" },
        { title: "Hot Hits Hindi", desc: "Hottest Hindi songs right now.", image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?w=300&h=300&fit=crop" },
        { title: "Indie India", desc: "The best of the Indian indie scene.", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2f8?w=300&h=300&fit=crop" },
        { title: "Chill Pop", desc: "Listen to the best chill pop songs.", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop" },
    ];

    const topMixes = [
        { title: "Daily Mix 1", desc: "Karan Aujla, Diljit Dosanjh and more", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&h=300&fit=crop" },
        { title: "Daily Mix 2", desc: "Sidhu Moose Wala, AP Dhillon and more", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop" },
        { title: "Daily Mix 3", desc: "Arijit Singh, Pritam and more", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=300&h=300&fit=crop" },
        { title: "Daily Mix 4", desc: "The Weeknd, Drake and more", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop" },
        { title: "Daily Mix 5", desc: "Lofi Beats, Chillhop and more", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&h=300&fit=crop" },
    ];

    return (
        <div className="home-content">
            <div className="filter-chips">
                <button className="chip active">All</button>
                <button className="chip">Music</button>
            </div>

            <div className="category-grid-2x4">
                {recentItems.map((item, i) => (
                    <div key={i} className="compact-card" onClick={() => navigate(`/playlist/${i}`)}>
                        <img src={item.image} alt={item.title} onError={handleImageError} />
                        <span>{item.title}</span>
                        <div className="compact-play">
                            <Play fill="black" size={20} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Made For You Section */}
            <div className="section-header">
                <div>
                    <span className="text-secondary" style={{ fontSize: '12px', fontWeight: 600 }}>Made For</span>
                    <h2 className="section-title">Kashifkhokhar</h2>
                </div>
                <span className="show-all">Show all</span>
            </div>

            <div className="album-grid">
                {madeFor.map((album, i) => (
                    <div key={i} className="album-card" onClick={() => navigate(`/playlist/madefor-${i}`)}>
                        <div className="album-img-wrapper">
                            <img
                                src={album.image}
                                alt={album.title}
                                className="album-img-placeholder"
                                style={{ objectFit: 'cover' }}
                                onError={handleImageError}
                            />
                            <div className="play-button-overlay-album">
                                <Play fill="black" size={24} />
                            </div>
                        </div>
                        <span className="album-title">{album.title}</span>
                        {album.desc && <span className="album-desc">{album.desc}</span>}
                    </div>
                ))}
            </div>

            {/* Your Top Mixes Section */}
            <div className="section-header" style={{ marginTop: '40px' }}>
                <h2 className="section-title">Your top mixes</h2>
                <span className="show-all">Show all</span>
            </div>

            <div className="album-grid">
                {topMixes.map((mix, i) => (
                    <div key={i} className="album-card" onClick={() => navigate(`/playlist/mix-${i}`)}>
                        <div className="album-img-wrapper">
                            <img
                                src={mix.image}
                                alt={mix.title}
                                className="album-img-placeholder"
                                style={{ objectFit: 'cover' }}
                                onError={handleImageError}
                            />
                            <div className="play-button-overlay-album">
                                <Play fill="black" size={24} />
                            </div>
                        </div>
                        <span className="album-title">{mix.title}</span>
                        <span className="album-desc">{mix.desc}</span>
                    </div>
                ))}
            </div>

            {/* Jump Back In Section */}
            <div className="section-header" style={{ marginTop: '40px' }}>
                <h2 className="section-title">Jump back in</h2>
                <span className="show-all">Show all</span>
            </div>

            <div className="album-grid">
                {jumpBackIn.map((item, i) => (
                    <div key={i} className="album-card" onClick={() => navigate(`/playlist/jump-${i}`)}>
                        <div className="album-img-wrapper">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="album-img-placeholder"
                                style={{ objectFit: 'cover' }}
                                onError={handleImageError}
                            />
                            <div className="play-button-overlay-album">
                                <Play fill="black" size={24} />
                            </div>
                        </div>
                        <span className="album-title">{item.title}</span>
                        <span className="album-desc">{item.desc}</span>
                    </div>
                ))}
            </div>

            {/* Recently Played Section (Songs/Albums mixed) */}
            <div className="section-header" style={{ marginTop: '40px' }}>
                <h2 className="section-title">Recently played</h2>
                <span className="show-all">Show all</span>
            </div>

            <div className="album-grid">
                {recentItems.slice(0, 5).map((item, i) => (
                    <div key={i} className="album-card" onClick={() => navigate(`/playlist/recent-${i}`)}>
                        <div className="album-img-wrapper">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="album-img-placeholder"
                                style={{ objectFit: 'cover' }}
                                onError={handleImageError}
                            />
                            <div className="play-button-overlay-album">
                                <Play fill="black" size={24} />
                            </div>
                        </div>
                        <span className="album-title">{item.title}</span>
                        <span className="album-desc">Playlist</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;

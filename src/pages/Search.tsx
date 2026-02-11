import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.currentTarget;
        const fallbackSource = "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=60";

        if (target.src !== fallbackSource) {
            target.src = fallbackSource;
        } else {
            // If fallback also fails, use a solid color or hide it
            target.style.display = 'none';
        }
    };

    const categories = [
        { title: "Music", color: "#dc148c", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop" },
        { title: "Podcasts", color: "#006450", image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&auto=format&fit=crop" },
        { title: "Live Events", color: "#8400e7", image: "https://images.unsplash.com/photo-1501612780327-45045538702b?w=300&auto=format&fit=crop" },
        { title: "Made for You", color: "#1e3264", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop" },
        { title: "New Releases", color: "#e8115b", image: "https://images.unsplash.com/photo-1514525253361-bee8a187499b?w=300&auto=format&fit=crop" },
        { title: "Hindi", color: "#5d9b73", image: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3c?w=300&auto=format&fit=crop" },
        { title: "Punjabi", color: "#ba5d07", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300&auto=format&fit=crop" },
        { title: "Tamil", color: "#a56752", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2f8?w=300&auto=format&fit=crop" },
        { title: "Telugu", color: "#e91429", image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?w=300&auto=format&fit=crop" },
        { title: "Charts", color: "#8d67ab", image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&auto=format&fit=crop" },
        { title: "Pop", color: "#1e3264", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=300&auto=format&fit=crop" },
        { title: "Chill", color: "#d84000", image: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=300&auto=format&fit=crop" },
    ];

    const recentSearches = [
        { title: "Karan Aujla", type: "Artist", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=200&h=200&fit=crop" },
        { title: "Softly", type: "Song • Karan Aujla", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=200&h=200&fit=crop" },
        { title: "Sidhu Moose Wala", type: "Artist", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&h=200&fit=crop" },
    ];

    return (
        <div className="search-page">
            <div className="recent-searches-section mb-32">
                <div className="section-header">
                    <h2 className="section-title">Recent searches</h2>
                    <span className="show-all">Show all</span>
                </div>
                <div className="album-grid">
                    {recentSearches.map((item, i) => (
                        <div key={i} className="album-card" onClick={() => navigate(`/playlist/search-${i}`)}>
                            <div className="album-img-wrapper">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={item.type === 'Artist' ? 'artist-img-placeholder' : 'album-img-placeholder'}
                                    onError={handleImageError}
                                />
                            </div>
                            <span className="album-title">{item.title}</span>
                            <span className="album-desc">{item.type}</span>
                        </div>
                    ))}
                </div>
            </div>

            <h2 className="section-title mb-24">Browse all</h2>
            <div className="search-grid">
                {categories.map((cat, i) => (
                    <div
                        key={i}
                        className="search-card"
                        style={{ backgroundColor: cat.color }}
                        onClick={() => navigate(`/playlist/${cat.title.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                        <span className="search-card-title">{cat.title}</span>
                        <img
                            src={cat.image}
                            alt={cat.title}
                            className="search-card-img"
                            onError={handleImageError}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;

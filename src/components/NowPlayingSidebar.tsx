import { MoreHorizontal, X, Heart } from 'lucide-react';

const NowPlayingSidebar = () => {
    return (
        <aside className="right-sidebar">
            <div className="now-playing-panel">
                <div className="panel-header-refined">
                    <h3>Goat</h3>
                    <div className="header-actions">
                        <MoreHorizontal size={20} />
                        <X size={20} />
                    </div>
                </div>

                <div className="large-art-refined">
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop" alt="Album Art" />
                </div>

                <div className="track-info-large-refined">
                    <div className="title-heart">
                        <h2>Goat</h2>
                        <div className="heart-circle">
                            <Heart size={20} />
                        </div>
                    </div>
                    <p>AP Dhillon, Gurinder Gill</p>
                </div>

                <div className="artist-card-full">
                    <div className="artist-header">
                        <h4>About the artist</h4>
                    </div>
                    <div className="artist-banner">
                        <img src="https://images.unsplash.com/photo-1501612780327-45045538702b?w=500&fit=crop" alt="Artist Banner" />
                        <div className="artist-avatar-overlay">
                            <img src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=200&fit=crop" alt="Artist Avatar" />
                        </div>
                    </div>
                    <div className="artist-bio-mini">
                        <span className="artist-name-mini">AP Dhillon</span>
                        <div className="listener-count">
                            <span>21,432,123 monthly listeners</span>
                        </div>
                        <p className="bio-snippet">
                            Amritpal Singh Dhillon, known as AP Dhillon, is an Indo-Canadian singer, rapper and songwriter...
                        </p>
                        <button className="follow-btn-artist">Follow</button>
                    </div>
                </div>

                <div className="next-in-queue-card">
                    <div className="queue-header">
                        <h4>Next in queue</h4>
                        <span>Open queue</span>
                    </div>
                    <div className="queue-item-mini">
                        <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=50&h=50&fit=crop" alt="Queue Item" />
                        <div className="queue-item-info">
                            <span className="q-name">Majhail</span>
                            <span className="q-artist">AP Dhillon</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default NowPlayingSidebar;

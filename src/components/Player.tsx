import {
    Play,
    SkipBack,
    SkipForward,
    Repeat,
    Shuffle,
    Mic2,
    ListMusic,
    Laptop2,
    Volume2,
    Maximize2,
    Heart
} from 'lucide-react';

const Player = () => {
    return (
        <div className="player">
            <div className="now-playing">
                <div className="track-img">
                    <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=56&h=56&fit=crop" alt="Album Art" />
                </div>
                <div className="track-info">
                    <span className="track-name">Low Rider</span>
                    <span className="track-artist">War</span>
                </div>
                <button className="heart-btn-mini">
                    <Heart size={16} />
                </button>
            </div>

            <div className="player-controls">
                <div className="control-buttons">
                    <Shuffle size={16} className="text-secondary" />
                    <SkipBack size={20} fill="currentColor" />
                    <div className="play-btn">
                        <Play size={20} fill="black" />
                    </div>
                    <SkipForward size={20} fill="currentColor" />
                    <Repeat size={16} className="text-secondary" />
                </div>
                <div className="playback-bar">
                    <span className="time">0:00</span>
                    <div className="progress-bar-container">
                        <div className="progress-bar" />
                    </div>
                    <span className="time">3:45</span>
                </div>
            </div>

            <div className="extra-controls">
                <Mic2 size={16} />
                <ListMusic size={16} />
                <Laptop2 size={16} />
                <div className="volume-control">
                    <Volume2 size={16} />
                    <div className="volume-bar-container">
                        <div className="volume-bar" />
                    </div>
                </div>
                <Maximize2 size={16} />
            </div>
        </div>
    );
};

export default Player;

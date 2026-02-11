import { Play, Clock, MoreHorizontal, Heart } from 'lucide-react';
import { useParams } from 'react-router-dom';

const PlaylistView = () => {
    const { id } = useParams();

    // Simple mock data map to make it feel dynamic
    const playlistThemes: Record<string, { title: string, image: string, color: string }> = {
        'music': { title: 'Music', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop', color: '#dc148c' },
        'podcasts': { title: 'Podcasts', image: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&auto=format&fit=crop', color: '#006450' },
        'live-events': { title: 'Live Events', image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=500&auto=format&fit=crop', color: '#8400e7' },
        'liked-songs': { title: 'Liked Songs', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop', color: '#450af5' },
    };

    const currentTheme = playlistThemes[id || ''] || {
        title: (id || 'Playlist').split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=500&auto=format&fit=crop&q=60",
        color: '#1e3264'
    };

    const playlist = {
        title: currentTheme.title,
        description: "Your favorite tracks, all in one place.",
        image: currentTheme.image,
        owner: "User",
        songs: 15,
        duration: "52m 14s"
    };

    const tracks = [
        { title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", dateAdded: "2 days ago", duration: "3:20" },
        { title: "Starboy", artist: "The Weeknd", album: "Starboy", dateAdded: "1 week ago", duration: "3:50" },
        { title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", dateAdded: "3 weeks ago", duration: "3:35" },
        { title: "Die For You", artist: "The Weeknd", album: "Starboy", dateAdded: "1 month ago", duration: "4:20" },
        { title: "The Hills", artist: "The Weeknd", album: "Beauty Behind the Madness", dateAdded: "2 months ago", duration: "4:02" },
        { title: "Creepin' (with The Weeknd & 21 Savage)", artist: "Metro Boomin", album: "HEROES & VILLAINS", dateAdded: "2 months ago", duration: "3:41" },
        { title: "Heartless", artist: "The Weeknd", album: "After Hours", dateAdded: "3 months ago", duration: "3:18" },
        { title: "Call Out My Name", artist: "The Weeknd", album: "My Dear Melancholy,", dateAdded: "3 months ago", duration: "3:48" },
        { title: "Earned It (Fifty Shades Of Grey)", artist: "The Weeknd", album: "Beauty Behind the Madness", dateAdded: "4 months ago", duration: "4:37" },
        { title: "Reminder", artist: "The Weeknd", album: "Starboy", dateAdded: "4 months ago", duration: "3:38" },
        { title: "I Feel It Coming", artist: "The Weeknd", album: "Starboy", dateAdded: "5 months ago", duration: "4:29" },
        { title: "Often", artist: "The Weeknd", album: "Beauty Behind the Madness", dateAdded: "5 months ago", duration: "4:09" },
        { title: "In Your Eyes", artist: "The Weeknd", album: "After Hours", dateAdded: "6 months ago", duration: "3:57" },
        { title: "Out of Time", artist: "The Weeknd", album: "Dawn FM", dateAdded: "6 months ago", duration: "3:34" },
        { title: "Sacrifice", artist: "The Weeknd", album: "Dawn FM", dateAdded: "7 months ago", duration: "3:08" },
    ];

    return (
        <div className="playlist-view">
            <div className="playlist-header">
                <div className="header-image">
                    <img src={playlist.image} alt={playlist.title} />
                </div>
                <div className="header-info">
                    <span className="type">Playlist</span>
                    <h1 className="title">{playlist.title}</h1>
                    <div className="meta">
                        <span className="owner">{playlist.owner}</span>
                        <span className="dot">•</span>
                        <span>{playlist.songs} songs,</span>
                        <span className="duration-total">{playlist.duration}</span>
                    </div>
                </div>
            </div>

            <div className="playlist-actions">
                <div className="play-btn-large">
                    <Play fill="black" size={24} />
                </div>
                <Heart size={32} className="heart-icon-large" />
                <MoreHorizontal size={32} className="more-btn" />
            </div>

            <div className="tracklist">
                <div className="tracklist-header">
                    <div className="track-number">#</div>
                    <div className="track-title-info">Title</div>
                    <div className="track-album">Album</div>
                    <div className="track-date">Date added</div>
                    <div className="track-duration">
                        <Clock size={16} />
                    </div>
                </div>

                <div className="track-rows">
                    {tracks.map((track, i) => (
                        <div key={i} className="track-row">
                            <div className="track-number">{i + 1}</div>
                            <div className="track-title-info">
                                <span className="name">{track.title}</span>
                                <span className="artist">{track.artist}</span>
                            </div>
                            <div className="track-album">{track.album}</div>
                            <div className="track-date">{track.dateAdded}</div>
                            <div className="track-duration">{track.duration}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlaylistView;

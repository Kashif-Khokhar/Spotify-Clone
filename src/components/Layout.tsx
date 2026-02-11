import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Player from './Player';
import NowPlayingSidebar from './NowPlayingSidebar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="app-layout">
            <div className="layout-top">
                <Sidebar />
                <main className="main-content">
                    <TopBar />
                    <div className="content-scroll">
                        {children}
                    </div>
                </main>
                <NowPlayingSidebar />
            </div>
            <Player />
        </div>
    );
};

export default Layout;

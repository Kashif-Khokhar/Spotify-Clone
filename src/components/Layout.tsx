import React from 'react';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import Player from './Player';
import NowPlayingSidebar from './NowPlayingSidebar';
import MobileNav from './MobileNav';
import MobileHeader from './MobileHeader';
import { FilterProvider, useFilter } from './FilterContext';

interface LayoutProps {
    children: React.ReactNode;
}

type FilterType = 'All' | 'Music' | 'Podcasts';

const LayoutContent: React.FC<LayoutProps> = ({ children }) => {
    const { activeFilter, setActiveFilter } = useFilter();

    return (
        <div className="app-layout">
            <div className="layout-top">
                <Sidebar />
                <main className="main-content">
                    <MobileHeader activeFilter={activeFilter} onFilterChange={(f: string) => setActiveFilter(f as FilterType)} />
                    <TopBar />
                    <div className="content-scroll">
                        {children}
                    </div>
                </main>
                <NowPlayingSidebar />
            </div>
            <Player />
            <MobileNav />
        </div>
    );
};

const Layout: React.FC<LayoutProps> = (props) => (
    <FilterProvider>
        <LayoutContent {...props} />
    </FilterProvider>
);

export default Layout;

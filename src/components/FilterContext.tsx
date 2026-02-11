import React, { createContext, useContext, useState } from 'react';

type FilterType = 'All' | 'Music' | 'Podcasts';

interface FilterContextType {
    activeFilter: FilterType;
    setActiveFilter: (filter: FilterType) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeFilter, setActiveFilter] = useState<FilterType>('All');

    return (
        <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
            {children}
        </FilterContext.Provider>
    );
};

export const useFilter = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error('useFilter must be used within a FilterProvider');
    }
    return context;
};

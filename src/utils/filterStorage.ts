export const FILTER_KEY = 'expertFilters';

export type StoredFilters = {
    expertise: string[];
    languages: string[];
    price: string[];
    gender: string[];
};

export const getStoredFilters = (): StoredFilters => {
    const saved = localStorage.getItem(FILTER_KEY);

    if (!saved) {
        return {
            expertise: [],
            languages: [],
            price: [],
            gender: [],
        };
    }

    const parsed = JSON.parse(saved);

    return {
        expertise: Array.isArray(parsed.expertise) ? parsed.expertise : [],
        languages: Array.isArray(parsed.languages) ? parsed.languages : [],
        price: Array.isArray(parsed.price) ? parsed.price : [],
        gender: Array.isArray(parsed.gender) ? parsed.gender : [],
    };
};

export const setStoredFilters = (filters: StoredFilters) => {
    localStorage.setItem(FILTER_KEY, JSON.stringify(filters));
};

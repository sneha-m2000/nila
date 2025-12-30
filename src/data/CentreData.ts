// data/CentreData.ts
export type FilterCategory = 'Expertise' | 'Languages' | 'Price' | 'Gender';

export interface FilterState {
    Expertise: string[];
    Languages: string[];
    Price: string[];
    Gender: string[];
}

export const filterData: Record<FilterCategory, string[]> = {
    Expertise: [
        'Anxiety',
        'Depression',
        'Relationship Issues',
        'Stress Management',
        'Trauma',
        'Self-esteem',
        'Career Counseling',
        'Addiction',
        'Child Psychology',
        'Family Therapy',
    ],
    Languages: ['English', 'Hindi', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Marathi', 'Gujarati', 'Punjabi'],
    Price: ['₹500 - ₹1000', '₹1000 - ₹2000', '₹2000 - ₹5000', '₹5000+'],
    Gender: ['Male', 'Female', 'Non-binary', 'Prefer not to say'],
};

export interface Expert {
    id: number;
    name: string;
    experience: string;
    price: string;
    videoId: string;
    expertise: string[];
    languages: string[];
    gender: string;
    profileImage: string;
    nextSlot?: string;
}

export const expertsData: Expert[] = [
    {
        id: 1,
        name: 'Dr. Priya Sharma',
        experience: '8 years experience',
        price: '₹1500 / session',
        videoId: 'dQw4w9WgXcQ',
        expertise: ['Anxiety', 'Depression', 'Stress Management'],
        languages: ['English', 'Hindi', 'Bengali'],
        gender: 'Female',
        profileImage: 'https://randomuser.me/api/portraits/women/65.jpg',
        nextSlot: 'Today, 06:30 PM',
    },
    {
        id: 2,
        name: 'Dr. Rajesh Kumar',
        experience: '12 years experience',
        price: '₹2000 / session',
        videoId: '9bZkp7q19f0',
        expertise: ['Relationship Issues', 'Family Therapy', 'Trauma'],
        languages: ['English', 'Hindi', 'Tamil'],
        gender: 'Male',
        profileImage: 'https://randomuser.me/api/portraits/men/75.jpg',
        nextSlot: 'Tomorrow, 10:00 AM',
    },
    {
        id: 3,
        name: 'Dr. Anjali Mehta',
        experience: '10 years experience',
        price: '₹1800 / session',
        videoId: 'J---aiyznGQ',
        expertise: ['Self-esteem', 'Career Counseling'],
        languages: ['English', 'Hindi', 'Gujarati'],
        gender: 'Female',
        profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
        nextSlot: 'Today, 04:00 PM',
    },
    {
        id: 4,
        name: 'Dr. Arvind Singh',
        experience: '15 years experience',
        price: '₹2500 / session',
        videoId: 'L_jWHffIx5E',
        expertise: ['Addiction', 'Trauma', 'Family Therapy'],
        languages: ['English', 'Hindi', 'Punjabi'],
        gender: 'Male',
        profileImage: 'https://randomuser.me/api/portraits/men/22.jpg',
        nextSlot: 'Tomorrow, 02:00 PM',
    },
];

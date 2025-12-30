// import { useState, useEffect, useRef } from 'react';
// import { User, Stethoscope, Smile, Heart } from 'lucide-react';
// import GradientIcon from '../components/ui/GradientIcon';
// import TherapySurveyCard from '../components/Startcard';
// import FilterBar from '../components/ui/Filterbar';
// import ExpertCard from '../components/ExpertCard';
// import { experts } from '../data/expertsdata';

// const ExpertsFilter = () => {
//     const [active, setActive] = useState('Therapist');

//     // 🔹 Load selected expertise from localStorage (on first render)
//     const [selectedExpertise, setSelectedExpertise] = useState<string[]>(() => {
//         const saved = localStorage.getItem('selectedExpertise');
//         return saved ? JSON.parse(saved) : [];
//     });

//     // 🔹 Prevent overwrite on first render
//     const hasMounted = useRef(false);

//     // 🔹 Persist expertise after user changes it
//     useEffect(() => {
//         if (!hasMounted.current) {
//             hasMounted.current = true;
//             return; // ⛔ skip first render
//         }

//         localStorage.setItem('selectedExpertise', JSON.stringify(selectedExpertise));
//     }, [selectedExpertise]);

//     const tabs = [
//         { name: 'Therapist', icon: User },
//         { name: 'Psychiatrist', icon: Stethoscope },
//         { name: 'Child and Youth Expert', icon: Smile },
//         { name: 'Couples Therapist', icon: Heart },
//     ];

//     return (
//         <div>
//             {/* TOP SECTION */}
//             <div className="w-full bg-[#edfcf1] py-10">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <h2 className="text-center text-2xl font-light text-text-main mb-8">
//                         Find an expert who understands your needs.
//                     </h2>

//                     {/* TABS */}
//                     <div className="flex flex-wrap items-center justify-center gap-4">
//                         {tabs.map(({ name, icon }) => {
//                             const isActive = active === name;

//                             return (
//                                 <button
//                                     key={name}
//                                     onClick={() => setActive(name)}
//                                     className={`
//                                         flex items-center gap-2 px-6 py-3 rounded-full
//                                         text-sm font-medium transition-all duration-300
//                                         border
//                                         ${
//                                             isActive
//                                                 ? 'bg-[#2f3e5c] text-white'
//                                                 : 'bg-white text-text-main border-card hover:bg-[#e9fbdc] hover:border-primary hover:text-primary'
//                                         }
//                                         focus:outline-none focus:ring-2 focus:ring-primary-focus
//                                     `}
//                                 >
//                                     <GradientIcon Icon={icon} active={isActive} />
//                                     {name}
//                                 </button>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* CONTENT */}
//             <div className="max-w-6xl mx-auto px-6">
//                 {/* START CARD */}
//                 <div className="flex justify-center py-10">
//                     <TherapySurveyCard />
//                 </div>

//                 {/* FILTER BAR */}
//                 <div className="flex justify-center pb-10">
//                     <FilterBar onExpertiseChange={setSelectedExpertise} />
//                 </div>

//                 {/* EXPERT CARDS */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
//                     {experts.map((expert, index) => (
//                         <ExpertCard key={index} expert={expert} highlightedExpertise={selectedExpertise} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ExpertsFilter;

import { useState, useEffect, useRef } from 'react';
import { User, Stethoscope, Smile, Heart } from 'lucide-react';
import GradientIcon from '../components/ui/GradientIcon';
import TherapySurveyCard from '../components/Startcard';
import FilterBar from '../components/ui/Filterbar';
import ExpertCard from '../components/ExpertCard';
import { experts } from '../data/expertsdata';

const ExpertsFilter = () => {
    const [active, setActive] = useState('Therapist');

    // 🔹 Load selected expertise from localStorage (on first render)
    const [selectedExpertise, setSelectedExpertise] = useState<string[]>(() => {
        const saved = localStorage.getItem('selectedExpertise');
        return saved ? JSON.parse(saved) : [];
    });

    // 🔹 NEW: Load all filters from localStorage
    const [filters, setFilters] = useState<Record<string, string[]>>(() => {
        const saved = localStorage.getItem('allFilters');
        return saved ? JSON.parse(saved) : {};
    });

    // 🔹 NEW: Filtered experts state
    const [filteredExperts, setFilteredExperts] = useState(experts);

    // 🔹 Prevent overwrite on first render
    const hasMounted = useRef(false);

    // 🔹 Persist expertise after user changes it
    useEffect(() => {
        if (!hasMounted.current) {
            hasMounted.current = true;
            return; // ⛔ skip first render
        }

        localStorage.setItem('selectedExpertise', JSON.stringify(selectedExpertise));
    }, [selectedExpertise]);

    // 🔹 NEW: Apply filters whenever they change
    useEffect(() => {
        applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters]);

    const applyFilters = () => {
        let filtered = [...experts];

        // Apply Expertise filter
        if (filters.Expertise?.length > 0) {
            filtered = filtered.filter((expert) => expert.expertise.some((e) => filters.Expertise.includes(e)));
        }

        // Apply Languages filter
        if (filters.Languages?.length > 0) {
            filtered = filtered.filter((expert) => expert.languages?.some((lang) => filters.Languages.includes(lang)));
        }

        // Apply Price filter
        if (filters.Price?.length > 0) {
            filtered = filtered.filter((expert) => {
                const price = parseInt(expert.price.replace(/[^0-9]/g, ''));
                return filters.Price.some((range) => {
                    if (range === '₹1000-₹2000') return price >= 1000 && price <= 2000;
                    if (range === '₹2000-₹3000') return price > 2000 && price <= 3000;
                    if (range === '₹3000-₹4000') return price > 3000 && price <= 4000;
                    if (range === '₹4000+') return price > 4000;
                    return false;
                });
            });
        }

        // Apply Gender filter
        if (filters.Gender?.length > 0 && !filters.Gender.includes('Any')) {
            filtered = filtered.filter((expert) => filters.Gender.includes(expert.gender));
        }

        // If no matches, show all experts
        setFilteredExperts(filtered.length > 0 ? filtered : experts);
    };

    const tabs = [
        { name: 'Therapist', icon: User },
        { name: 'Psychiatrist', icon: Stethoscope },
        { name: 'Child and Youth Expert', icon: Smile },
        { name: 'Couples Therapist', icon: Heart },
    ];

    return (
        <div>
            {/* TOP SECTION */}
            <div className="w-full bg-[#edfcf1] py-10">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-2xl font-light text-text-main mb-8">
                        Find an expert who understands your needs.
                    </h2>

                    {/* TABS */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {tabs.map(({ name, icon }) => {
                            const isActive = active === name;

                            return (
                                <button
                                    key={name}
                                    onClick={() => setActive(name)}
                                    className={`
                                        flex items-center gap-2 px-6 py-3 rounded-full
                                        text-sm font-medium transition-all duration-300
                                        border
                                        ${
                                            isActive
                                                ? 'bg-[#2f3e5c] text-white'
                                                : 'bg-white text-text-main border-card hover:bg-[#e9fbdc] hover:border-primary hover:text-primary'
                                        }
                                        focus:outline-none focus:ring-2 focus:ring-primary-focus
                                    `}
                                >
                                    <GradientIcon Icon={icon} active={isActive} />
                                    {name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-6xl mx-auto px-6">
                {/* START CARD */}
                <div className="flex justify-center py-10">
                    <TherapySurveyCard />
                </div>

                {/* FILTER BAR */}
                <div className="flex justify-center pb-10">
                    <FilterBar onExpertiseChange={setSelectedExpertise} onFiltersChange={setFilters} />
                </div>

                {/* EXPERT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {filteredExperts.map((expert, index) => (
                        <ExpertCard key={index} expert={expert} highlightedExpertise={selectedExpertise} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertsFilter;
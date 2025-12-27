import { useState } from 'react';
import { User, Stethoscope, Smile, Heart } from 'lucide-react';
import GradientIcon from '../components/ui/GradientIcon';
import TherapySurveyCard from '../components/Startcard';
import FilterBar from '../components/ui/Filterbar';
import ExpertCard from '../components/ExpertCard';
import { experts } from '../data/expertsdata';

const ExpertsFilter = () => {
    const [active, setActive] = useState('Therapist');

    const tabs = [
        { name: 'Therapist', icon: User },
        { name: 'Psychiatrist', icon: Stethoscope },
        { name: 'Child and Youth Expert', icon: Smile },
        { name: 'Couples Therapist', icon: Heart },
    ];

    return (
        <div>
            <div className="w-full bg-[#edfcf1] py-10">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Heading */}
                    <h2 className="text-center text-2xl font-light text-text-main mb-8">
                        Find an expert who understands your needs.
                    </h2>

                    {/* Tabs */}
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
                          : 'bg-white text-text-main border-card  hover:bg-[#e9fbdc]  hover:border-primary hover:text-primary'
                  }
                  focus:outline-none focus:ring-2 focus:ring-primary-focus
                `}
                                >
                                    {/* ✅ Dynamic icon */}
                                    <GradientIcon Icon={icon} active={isActive} />
                                    {name}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
             <div className="max-w-6xl mx-auto px-6">
                {/* Start Card */}
                <div className="flex justify-center py-10">
                    <TherapySurveyCard />
                </div>

                {/* Filters */}
                <div className="flex justify-center pb-10">
                    <FilterBar />
                </div>

                {/* Expert Cards — SAME WIDTH AS START CARD */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
                    {experts.map((expert, index) => (
                        <ExpertCard key={index} expert={expert} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExpertsFilter;

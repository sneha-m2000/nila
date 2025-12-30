import { useState } from 'react';
import { ChevronDown, MapPin } from 'lucide-react';
import SelectCentreModal from './SelectCentreModal';
import ExpertiseFilterModal from './ExpertiseFilterModal';
import type { FilterCategory } from '../../data/CentreData';

const filters = [
    { label: 'Select Centre', icon: MapPin },
    { label: 'Expertise' },
    { label: 'Languages' },
    { label: 'Price' },
    { label: 'Gender' },
];

interface Props {
    onExpertiseChange: (values: string[]) => void;
}

export default function FilterBar({ onExpertiseChange }: Props) {
    const [openCentre, setOpenCentre] = useState(false);
    const [openFilter, setOpenFilter] = useState(false);
    const [activeCategory, setActiveCategory] = useState<FilterCategory>('Expertise');

    // ✅ Lazy initialization from localStorage (NO effect)
    const [filterCounts, setFilterCounts] = useState<Record<string, number>>(() => {
        const saved = localStorage.getItem('selectedExpertise');
        const expertiseCount = saved ? JSON.parse(saved).length : 0;

        // 🔥 restore highlighted expertise in parent
        if (expertiseCount > 0 && saved) {
            try {
                onExpertiseChange(JSON.parse(saved));
            } catch {
                // ignore invalid storage
            }
        }

        return {
            Centre: 0,
            Expertise: expertiseCount,
            Languages: 0,
            Price: 0,
            Gender: 0,
        };
    });

    return (
        <>
            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap gap-4">
                {filters.map(({ label, icon: Icon }) => {
                    const count = label === 'Select Centre' ? filterCounts.Centre : filterCounts[label];

                    return (
                        <button
                            key={label}
                            onClick={() => {
                                if (label === 'Select Centre') {
                                    setOpenCentre(true);
                                } else {
                                    setActiveCategory(label as FilterCategory);
                                    setOpenFilter(true);
                                }
                            }}
                            className="flex items-center gap-2 px-4 py-2 text-xs rounded-full border bg-[#D8CFC4]"
                        >
                            {Icon && <Icon size={16} />}
                            {label}

                            {count > 0 && (
                                <span className="ml-1 text-[10px] bg-primary text-white rounded-full px-2 py-0.5">
                                    {count}
                                </span>
                            )}

                            <ChevronDown size={14} />
                        </button>
                    );
                })}
            </div>

            {/* CENTRE MODAL */}
            <SelectCentreModal
                open={openCentre}
                onClose={() => setOpenCentre(false)}
                onApply={(count) => setFilterCounts((prev) => ({ ...prev, Centre: count }))}
            />

            {/* FILTER MODAL */}
            <ExpertiseFilterModal
                open={openFilter}
                initialCategory={activeCategory}
                onClose={() => setOpenFilter(false)}
                onApply={(category, count, values) => {
                    setFilterCounts((prev) => ({
                        ...prev,
                        [category]: count,
                    }));

                    if (category === 'Expertise') {
                        onExpertiseChange(values);
                    }
                }}
            />
        </>
    );
}

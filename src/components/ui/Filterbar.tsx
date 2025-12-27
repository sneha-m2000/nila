import { ChevronDown, MapPin } from 'lucide-react';

const filters = [
    { label: 'Select Centre', icon: MapPin },
    { label: 'Expertise' },
    { label: 'Languages' },
    { label: 'Price' },
    { label: 'Gender' },
];

export default function FilterBar() {
    return (
        <div className="flex flex-wrap items-center gap-4">
            {filters.map(({ label, icon: Icon }) => (
                <button
                    key={label}
                    className="
                        flex items-center gap-2
                        px-4 py-2
                        rounded-full
                        border border-gray-300
                        bg-[#D8CFC4]
                        text-xs font-medium text-[#2F3E5C] 
                        hover:bg-[#24324A]  hover:text-white 
                        hover:border-gray-400
                        transition
                    "
                >
                    {Icon && <Icon size={16} className="text-gray-500" />}
                    {label}
                    <ChevronDown size={16} className="text-gray-500" />
                </button>
            ))}
        </div>
    );
}

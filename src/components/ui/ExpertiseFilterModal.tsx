import { useEffect, useState } from 'react';
import { X, Search } from 'lucide-react';
import { filterData, type FilterCategory } from '../../data/CentreData';

interface Props {
    open: boolean;
    onClose: () => void;
    initialCategory: FilterCategory;
    onApply: (category: FilterCategory, count: number, values: string[]) => void;
    onClearAll: () => void;
}


export default function ExpertiseFilterModal({ open, onClose, initialCategory, onApply }: Props) {
    const categories: FilterCategory[] = ['Expertise', 'Languages', 'Price', 'Gender'];

    const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(initialCategory);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelectedCategory(initialCategory);
        setSelectedValues([]);
        setSearchQuery('');
    }, [initialCategory]);

    const toggleItem = (item: string) => {
        setSelectedValues((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
    };

    // const clearAll = () => {
    //     setSelectedValues([]);
    //     setSearchQuery('');
    //     onClearAll(); // 🔥 notify parent
    //     onClose();
    // };
    const clearCategory = () => {
        setSelectedValues([]);
        setSearchQuery('');

        // 🔥 clear only current category
        onApply(selectedCategory, 0, []);
        onClose();
    };

    const filteredList = filterData[selectedCategory].filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const categoryCounts: Record<FilterCategory, number> = {
        Expertise: selectedCategory === 'Expertise' ? selectedValues.length : 0,
        Languages: selectedCategory === 'Languages' ? selectedValues.length : 0,
        Price: selectedCategory === 'Price' ? selectedValues.length : 0,
        Gender: selectedCategory === 'Gender' ? selectedValues.length : 0,
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            {/* MODAL */}
            <div className="w-[420px] h-[450px] bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden">
                {/* HEADER */}
                <div className="flex items-center justify-between px-6 py-5 border-b shrink-0">
                    <h2 className="text-sm font-semibold">Filters</h2>
                    <button onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* BODY */}
                <div className="flex flex-1 h-full overflow-hidden">
                    {/* LEFT SIDEBAR */}
                    <div className="w-[200px] h-full bg-gray-50 border-r">
                        {categories.map((category) => {
                            const count = categoryCounts[category];
                            return (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setSelectedCategory(category);
                                        setSelectedValues([]);
                                        setSearchQuery('');
                                    }}
                                    className={`w-full px-4 py-4 text-xs flex justify-between items-center
                                        ${
                                            selectedCategory === category
                                                ? 'bg-[#EDF6E5] border-l-4 border-[#5B8C51]'
                                                : 'hover:bg-gray-100'
                                        }`}
                                >
                                    {category}
                                    {count > 0 && (
                                        <span className="w-5 h-5 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">
                                            {count}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex-1 h-full flex flex-col">
                        {/* SEARCH */}
                        <div className="px-6 pt-5 pb-4 shrink-0">
                            <div className="relative">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2" />
                                <input
                                    type="text"
                                    placeholder={`Search ${selectedCategory}`}
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-9 pr-4 py-2 text-xs border rounded-lg"
                                />
                            </div>
                        </div>

                        {/* LIST (FIXED HEIGHT – NO JUMP) */}
                        <div className="flex-1 min-h-[0] overflow-y-auto px-6 pb-4 no-scrollbar space-y-2">
                            {filteredList.map((item) => (
                                <label
                                    key={item}
                                    className={`flex items-center gap-3 px-3 py-3 min-h-[44px] text-xs rounded-lg cursor-pointer
                                        ${selectedValues.includes(item) ? 'bg-[#EDF6E5]' : 'hover:bg-gray-50'}`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={selectedValues.includes(item)}
                                        onChange={() => toggleItem(item)}
                                    />
                                    {item}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-between px-6 pb-6 pt-4 shrink-0 border-t">
                    {/* <button onClick={clearAll} className="text-xs font-medium text-text-secondary hover:text-gray-900"> */}
                    <button
                        onClick={clearCategory}
                        className="text-xs font-medium text-text-secondary hover:text-gray-900"
                    >
                        CLEAR ALL
                    </button>
                    <button
                        disabled={selectedValues.length === 0}
                        onClick={() => {
                            onApply(selectedCategory, selectedValues.length, selectedValues);
                            onClose();
                        }}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition
        ${
            selectedValues.length
                ? 'bg-primary text-white hover:bg-primary-hover'
                : 'bg-gray-300 text-white cursor-not-allowed'
        }`}
                    >
                        SELECT
                    </button>
                </div>
            </div>
        </div>
    );
}

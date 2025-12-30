import { X, MapPin, Check, Info } from 'lucide-react';
import { useState } from 'react';

interface Props {
    open: boolean;
    onClose: () => void;
    onApply: (count: number) => void;
}


const centres = [
    {
        city: 'Bengaluru',
        areas: 'Indiranagar, Whitefield, Koramangala, JP Nagar, Sarjapur Road, Tha...',
        subCentres: ['Indiranagar', 'Whitefield', 'Koramangala', 'JP Nagar', 'Sarjapur Road'],
    },
    {
        city: 'Mumbai',
        areas: 'Bandra West',
        subCentres: ['Bandra West'],
    },
    {
        city: 'New Delhi',
        areas: 'All Centres',
        subCentres: ['Amaha, Safdarjung', 'Children First, Safdarjung'],
    },
    {
        city: 'Gurugram',
        areas: 'Amaha, Children First',
        subCentres: ['Amaha', 'Children First'],
    },
];

export default function SelectCentreModal({ open, onClose, onApply }: Props) {
    const [selected, setSelected] = useState<string | null>(null);
    const [subCentreSelections, setSubCentreSelections] = useState<{ [key: string]: string[] }>({});

    const handleCentreClick = (city: string) => {
        setSelected(selected === city ? null : city);
    };

    const handleAllCentresToggle = (city: string, subCentres: string[]) => {
        const currentSelections = subCentreSelections[city] || [];
        if (currentSelections.length === subCentres.length) {
            setSubCentreSelections({ ...subCentreSelections, [city]: [] });
        } else {
            setSubCentreSelections({ ...subCentreSelections, [city]: subCentres });
        }
    };

    const handleSubCentreToggle = (city: string, subCentre: string) => {
        const currentSelections = subCentreSelections[city] || [];
        if (currentSelections.includes(subCentre)) {
            setSubCentreSelections({
                ...subCentreSelections,
                [city]: currentSelections.filter((s) => s !== subCentre),
            });
        } else {
            setSubCentreSelections({
                ...subCentreSelections,
                [city]: [...currentSelections, subCentre],
            });
        }
    };

    if (!open) return null;

    const totalSelected = Object.values(subCentreSelections).reduce((sum, arr) => sum + arr.length, 0);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            {/* Modal */}
            {/* <div className="relative z-10 w-[420px] max-h-[600px] rounded-2xl bg-white shadow-xl flex flex-col"> */}
            <div className="relative z-10 w-[420px] max-h-[500px] rounded-2xl bg-white shadow-xl flex flex-col">
                {/* Header */}
                {/* Header */}
                <div className="px-6 pt-5 pb-3 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm font-semibold text-text-main">Select Centre</h2>

                        <button onClick={onClose} className="rounded-md p-1 text-gray-500 hover:bg-gray-100">
                            <X size={18} />
                        </button>
                    </div>
                </div>

                {/* Description */}
                <p className="px-6 pt-3 pb-4 text-[10px] text-text-secondary">
                    For an in-person session, select your preferred city or centre below.
                </p>

                {/* Centre list - Scrollable */}
                <div className="space-y-3 px-6 overflow-y-auto no-scrollbar h-[250px]">
                    {centres.map((c) => {
                        const isActive = selected === c.city;
                        const currentSelections = subCentreSelections[c.city] || [];
                        const allSelected =
                            currentSelections.length === c.subCentres.length && currentSelections.length > 0;

                        return (
                            <div
                                key={c.city}
                                className={`rounded-xl border ${
                                    isActive ? 'border-[#7d8e68] bg-[#edf5e3]' : 'border-gray-200'
                                }`}
                            >
                                <button
                                    onClick={() => handleCentreClick(c.city)}
                                    className="w-full flex items-center justify-between px-3 py-1  text-left"
                                >
                                    <div className="flex items-center gap-3">
                                        {/* Icon */}
                                        <div
                                            className={`
                                                h-10 w-10 rounded-lg flex items-center justify-center
                                                ${isActive ? 'bg-[#0f172a] text-white' : 'bg-gray-100 text-[#7d8e68]'}
                                            `}
                                        >
                                            <MapPin size={18} />
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <p className="text-sm font-medium text-text-main">{c.city}</p>
                                            <p className="text-[11px] text-text-secondary truncate max-w-[250px]">
                                                {c.areas}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Radio */}
                                    <div
                                        className={`
                                            h-4 w-4 rounded-full border flex items-center justify-center flex-shrink-0
                                            ${isActive ? 'border-[#7d8e68] bg-[#7d8e68]' : 'border-gray-400'}
                                        `}
                                    >
                                        {isActive && <Check size={10} className="text-white" />}
                                    </div>
                                </button>

                                {/* Dropdown */}
                                {isActive && (
                                    <div className="px-3 pb-3 space-y-2">
                                        {/* All Centres Checkbox */}
                                        <label className="flex items-center gap-2 cursor-pointer py-1">
                                            <input
                                                type="checkbox"
                                                checked={allSelected}
                                                onChange={() => handleAllCentresToggle(c.city, c.subCentres)}
                                                className="w-4 h-4 rounded accent-[#7d8e68] cursor-pointer"
                                            />
                                            <span className="text-xs text-text-secondary font-medium">All Centres</span>
                                        </label>

                                        {/* Individual Sub-centres */}
                                        {c.subCentres.map((subCentre) => (
                                            <label
                                                key={subCentre}
                                                className="flex items-center gap-2 cursor-pointer py-1 pl-6"
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={currentSelections.includes(subCentre)}
                                                    onChange={() => handleSubCentreToggle(c.city, subCentre)}
                                                    className="w-4 h-4 rounded accent-[#7d8e68] cursor-pointer"
                                                />
                                                <span className="text-xs text-text-secondary">{subCentre}</span>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Info */}
                <p className="mt-3 flex items-start gap-1.5 text-[11px] text-text-secondary px-6">
                    <Info className="mt-[1px] h-3.5 w-3.5 text-[#7d8e68]" />
                    <span>All experts available at the centres are also available online.</span>
                </p>

                {/* Footer */}
                <div className="mt-5 flex items-center justify-between px-6 pb-6">
                    <button
                        onClick={() => {
                            setSelected(null);
                            setSubCentreSelections({});
                        }}
                        className="text-xs font-medium text-text-secondary hover:text-gray-900"
                    >
                        CLEAR ALL
                    </button>
                    <button
                        disabled={totalSelected === 0}
                        onClick={() => {
                            onApply(totalSelected);
                            onClose();
                        }}
                        className={`px-5 py-2 rounded-full text-xs font-medium transition
        ${totalSelected ? 'bg-primary text-white hover:bg-primary-hover' : 'bg-gray-300 text-white cursor-not-allowed'}`}
                    >
                        SELECT
                    </button>
                </div>
            </div>
        </div>
    );
}
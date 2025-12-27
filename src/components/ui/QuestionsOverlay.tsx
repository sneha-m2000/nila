import { X } from 'lucide-react';

interface MentalHealthOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MentalHealthOverlay({ isOpen, onClose }: MentalHealthOverlayProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="relative w-full max-w-xl bg-[#F7F6F2] rounded-2xl p-8 shadow-xl">
                {/* Close */}
                <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-800">
                    <X size={22} />
                </button>

                {/* Heading */}
                <h2 className="text-xl font-light text-[#2B2B2B] mb-1">Let’s understand you better</h2>
                <p className="text-sm text-[#8A8D8F] mb-6">Answer a few quick questions about how you’re feeling.</p>

                {/* Questions */}
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm text-[#2B2B2B] mb-1">How are you feeling today?</label>
                        <input
                            type="text"
                            placeholder="Calm, anxious, low, okay..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CFE3D8]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-[#2B2B2B] mb-1">How has your sleep been recently?</label>
                        <input
                            type="text"
                            placeholder="Good, disturbed, not enough..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CFE3D8]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-[#2B2B2B] mb-1">
                            What’s troubling you the most right now?
                        </label>
                        <textarea
                            rows={3}
                            placeholder="You can share briefly..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#CFE3D8]"
                        />
                    </div>
                </div>

                {/* Continue */}
                <button
                    onClick={onClose}
                    className="mt-6 w-full bg-[#2F3E5C] text-white py-2.5 rounded-lg font-medium hover:opacity-90 transition"
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

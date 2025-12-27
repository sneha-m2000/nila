import { useState } from 'react';
import MentalHealthOverlay from './/ui/QuestionsOverlay';

export default function TherapySurveyCard() {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="
            mt-6
            bg-[#F1FCE9]
            border border-[#CFE3D8]
            rounded-lg
            max-w-5xl
            w-full
            px-10
            py-6
            mx-auto
        "
        >
            <div className="text-center space-y-4">
                {/* Heading */}
                <div className="space-y-0.5">
                    <h1 className="text-xl font-light text-text-main">Not feeling your best?</h1>
                    <p className="text-xl font-light text-[#2B2B2B]">you're not alone.</p>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed max-w-3xl mx-auto">
                    Please answer a few questions so that we can match you to the right therapist or counsellor.
                </p>

                {/* Privacy text */}
                <p className="text-xs text-text-secondary max-w-3xl mx-auto">
                    Your answers will be kept confidential and used only to ensure you receive the right care.
                    <br />
                    By starting this survey, you consent to our{' '}
                    <a href="#" className="text-[#2F3E5C] underline hover:opacity-80 transition">
                        Terms
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#2F3E5C] underline hover:opacity-80 transition">
                        Privacy Policy
                    </a>
                </p>

                {/* Button */}
                <button
                    onClick={() => setOpen(true)}
                    className="
                        mt-2
                        bg-[#2F3E5C]
                        text-white
                        font-medium
                        text-sm
                        px-10
                        py-2
                        rounded-md
                        shadow
                        hover:shadow-md
                        transition
                    "
                >
                    Start
                </button>
            </div>

            {/* Overlay */}
            <MentalHealthOverlay isOpen={open} onClose={() => setOpen(false)} />
        </div>
    );
}

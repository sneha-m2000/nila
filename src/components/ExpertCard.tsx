import { useState, useEffect } from 'react';
import VideoModal from './ui/VedioModal';
import { Smartphone } from 'lucide-react';

interface Props {
    expert: {
        name: string;
        experience: string;
        price: string;
        videoId: string;
        expertise: string[];
        languages?: string[];
        nextSlot?: string;
        profileImage: string;
    };
    highlightedExpertise: string[]; // ✅ ADD THIS
}

export default function ExpertCard({ expert,highlightedExpertise }: Props) {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<'online' | 'inperson'>('online');
    const [slide, setSlide] = useState<0 | 1>(0); // 0 = profile, 1 = video

    /* 🔁 AUTO SLIDER (PROFILE FIRST) */
    useEffect(() => {
        const interval = setInterval(() => {
            setSlide((prev) => (prev === 0 ? 1 : 0));
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <>
            <div className="rounded-xl border border-black/5 shadow-sm mb-4">
                {/* TOP CONTENT */}
                <div className="rounded-2xl bg-[#f7f6f2] p-3 sm:p-4">
                    {/* VIDEO + DETAILS */}
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                        {/* AUTO SLIDER */}
                        <div
                            onClick={() => slide === 1 && setOpen(true)}
                            className="
                                relative
                                w-[120px] h-[90px]
                                sm:w-[150px] sm:h-[110px]
                                shrink-0
                                rounded-xl
                                overflow-hidden
                                cursor-pointer
                                bg-black/10
                            "
                        >
                            {/* IMAGE */}
                            <img
                                src={
                                    slide === 0
                                        ? expert.profileImage
                                        : `https://img.youtube.com/vi/${expert.videoId}/hqdefault.jpg`
                                }
                                alt={expert.name}
                                className="w-full h-full object-cover transition-opacity duration-500"
                            />

                            {/* VIDEO LABEL */}
                            {slide === 1 && (
                                <div
                                    className="
                                    absolute bottom-1 left-1
                                    sm:bottom-2 sm:left-2
                                    text-white
                                    text-[9px] sm:text-[10px]
                                    bg-black/60
                                    px-2 py-0.5
                                    rounded-full
                                "
                                >
                                    ▶ Watch video
                                </div>
                            )}

                            {/* SLIDER INDICATORS */}
                            <div className="absolute bottom-1 right-2 flex gap-1">
                                {[0, 1].map((i) => (
                                    <span
                                        key={i}
                                        className={`h-1.5 w-1.5 rounded-full transition ${
                                            slide === i ? 'bg-white' : 'bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* DETAILS */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-[13px] sm:text-sm md:text-base font-semibold text-text-main leading-tight">
                                {expert.name}
                            </h3>

                            <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs text-text-secondary">{expert.experience}</p>

                            <p className="mt-1 sm:mt-2 text-[11px] sm:text-xs font-medium text-text-main">{expert.price}</p>
                        </div>
                    </div>

                    {/* EXPERTISE */}
                    <div className="mt-3 overflow-hidden">
                        <div className="mb-1 sm:mb-2 text-[12px] sm:text-[13px] font-medium text-text-main">Expertise:</div>

                        <div className="flex gap-2 w-max animate-marquee">
                            {[...expert.expertise, ...expert.expertise].map((item, i) => (
                                <span
                                    key={i}
                                    className={`
                                    px-2 sm:px-3 py-0.5 sm:py-1 rounded-md whitespace-nowrap
                                    text-[10px] sm:text-[11px]
                                    ${
                                        highlightedExpertise.includes(item)
                                            ? 'bg-primary text-white font-medium shadow-sm'
                                            : 'bg-white text-text-secondary'
                                    }
                            `}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* SPEAKS */}
                    <p className="mt-1 sm:mt-2 text-[10px] sm:text-[11px] text-text-secondary">
                        <span className="font-medium">Speaks:</span> {expert.languages ?? 'English, Hindi'}
                    </p>
                </div>

                {/* ACTION SECTION */}
                <div className="mt-3 bg-[#EDEADE] p-3 sm:p-4 space-y-2 sm:space-y-3 rounded-b-2xl">
                    {/* MODE SWITCH */}
                    <div className="inline-flex bg-white rounded-xl p-1 text-[10px] sm:text-xs border border-black/10">
                        <button
                            onClick={() => setMode('online')}
                            className={`px-4 sm:px-6 py-1 rounded-xl transition-all ${
                                mode === 'online'
                                    ? 'bg-white text-primary border border-primary shadow-sm'
                                    : 'text-text-secondary'
                            }`}
                        >
                            Online
                        </button>

                        <button
                            onClick={() => setMode('inperson')}
                            className={`px-4 sm:px-6 py-1 rounded-xl transition-all ${
                                mode === 'inperson'
                                    ? 'bg-white text-primary border border-primary shadow-sm'
                                    : 'text-text-secondary'
                            }`}
                        >
                            In-person
                        </button>
                    </div>

                    {/* SLOT INFO */}
                    <div className="text-[10px] sm:text-[11px] text-text-secondary space-y-1">
                        <div className="flex items-center gap-1">
                            <Smartphone size={14} className="text-primary" />
                            <span>{mode === 'online' ? 'Video consultation' : 'In-person session'}</span>
                        </div>

                        <div>
                            {mode === 'online' ? 'Next online slot:' : 'Next in-person slot:'}{' '}
                            <span className="text-primary font-medium">{expert.nextSlot ?? 'Today, 06:30 PM'}</span>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex gap-2 sm:gap-3 pt-1">
                        <button className="flex-1 py-2 rounded-full border border-primary text-primary text-[11px] sm:text-xs hover:bg-green-hover transition">
                            VIEW PROFILE
                        </button>

                        <button className="flex-1 py-2 rounded-full bg-primary text-white text-[11px] sm:text-xs hover:bg-primary-hover transition">
                            BOOK
                        </button>
                    </div>
                </div>
            </div>

            {open && <VideoModal videoId={expert.videoId} onClose={() => setOpen(false)} />}
        </>
    );
}

import { useState } from 'react';
import VideoModal from './ui/VedioModal';
import { Smartphone } from 'lucide-react';

interface Props {
    expert: {
        name: string;
        experience: string;
        price: string;
        videoId: string;
        expertise: string[];
        languages?: string;
        nextSlot?: string;
    };
}

export default function ExpertCard({ expert }: Props) {
    const [open, setOpen] = useState(false);
    const [mode, setMode] = useState<'online' | 'inperson'>('online');

    return (
        <>
            <div className=" rounded-xl border border-black/5 shadow-sm  mb-4">
                {/* TOP CONTENT – SEPARATE BACKGROUND */}
                <div className="rounded-2xl bg-[f7f6f2] p-4">
                    {/* TOP ROW : VIDEO + BASIC DETAILS */}
                    <div className="flex items-center gap-4">
                        {/* VIDEO */}
                        <div
                            onClick={() => setOpen(true)}
                            className="relative w-[150px] h-[110px] shrink-0 rounded-xl overflow-hidden cursor-pointer bg-black/10"
                        >
                            <img
                                src={`https://img.youtube.com/vi/${expert.videoId}/hqdefault.jpg`}
                                className="w-full h-full object-cover"
                                alt={expert.name}
                            />
                            <div className="absolute bottom-2 left-2 text-white text-[10px] bg-black/60 px-2 py-0.5 rounded-full">
                                ▶ Watch video
                            </div>
                        </div>

                        {/* DETAILS */}
                        <div className="flex flex-col justify-center">
                            <h3 className="text-sm font-semibold text-text-main leading-tight mt-2">{expert.name}</h3>

                            <p className="text-xs text-text-secondary mt-2">{expert.experience}</p>

                            <p className="text-xs font-medium text-text-main mt-2">{expert.price}</p>
                        </div>
                    </div>

                    {/* 🔁 EXPERTISE (ANIMATION KEPT) */}
                    <div className="mt-3 overflow-hidden">
                        <div className="mb-2 text-[13px] text-text-main font-medium">Expertise:</div>
                        <div className="flex gap-2 w-max animate-marquee">
                            {[...expert.expertise, ...expert.expertise].map((item, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 rounded-md bg-white text-[11px] text-text-secondary whitespace-nowrap"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* SPEAKS */}
                    <p className="mt-2 text-[11px] text-text-secondary">
                        <span className="font-medium">Speaks:</span> {expert.languages ?? 'English, Hindi'}
                    </p>
                </div>

                {/* COMMON ACTION SECTION BG */}
                <div className="mt-4  bg-card p-4 space-y-3 rounded-b-2xl">
                    {/* ONLINE / IN-PERSON */}
                    <div className="inline-flex bg-white rounded-xl p-1 text-xs border border-black/10">
                        <button
                            onClick={() => setMode('online')}
                            className={`px-6 py-1 rounded-xl text-xs transition-all ${
                                mode === 'online'
                                    ? 'bg-white text-primary border border-primary  shadow-sm'
                                    : 'text-text-secondary'
                            }`}
                        >
                            Online
                        </button>

                        <button
                            onClick={() => setMode('inperson')}
                            className={`px-6 py-1 rounded-xl text-xs transition-all ${
                                mode === 'inperson'
                                    ? 'bg-white text-primary border border-primary shadow-sm'
                                    : 'text-text-secondary'
                            }`}
                        >
                            In-person
                        </button>
                    </div>

                    {/* VIDEO + SLOT INFO */}
                    <div className="text-[11px] text-text-secondary space-y-1">
                        <div className="flex items-center gap-1">
                            <Smartphone size={14} className="text-primary" />
                            <span>{mode === 'online' ? 'Video consultation' : 'In-person session'}</span>
                        </div>

                        <div>
                            {mode === 'online' ? 'Next online slot:' : 'Next in-person slot:'}{' '}
                            <span className="text-primary font-medium">{expert.nextSlot ?? 'Today, 06:30 PM'}</span>
                        </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex gap-3 pt-1">
                        <button className="flex-1 py-2 rounded-full border border-primary text-primary text-xs hover:bg-green-hover transition">
                            VIEW PROFILE
                        </button>
                        <button className="flex-1 py-2 rounded-full bg-primary text-white text-xs hover:bg-primary-hover transition">
                            BOOK
                        </button>
                    </div>
                </div>
            </div>
            {open && <VideoModal videoId={expert.videoId} onClose={() => setOpen(false)} />}
        </>
    );
}

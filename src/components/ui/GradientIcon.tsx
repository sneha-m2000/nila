import type { LucideIcon } from 'lucide-react';

const GradientIcon = ({ Icon, active }: { Icon: LucideIcon; active: boolean }) => {
    return (
        <>
            {/* SVG gradient */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="50%" stopColor="#006400" /> {/* Green */}
                        <stop offset="50%" stopColor="#2F3E5C" /> {/* Dark Blue */}
                        <stop offset="100%" stopColor="#000000" /> {/* Black */}
                    </linearGradient>
                </defs>
            </svg>

            {/* Icon */}
            <Icon
                size={18}
                className={`
          stroke-[url(#icon-gradient)]
          transition-all duration-300
          ${active ? 'opacity-100 scale-105' : 'opacity-80'}
        `}
            />
        </>
    );
};

export default GradientIcon;

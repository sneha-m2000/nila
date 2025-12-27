// src/components/VideoModal.tsx
interface Props {
    videoId: string;
    onClose: () => void;
}

export default function VideoModal({ videoId, onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <button onClick={onClose} className="absolute top-6 right-6 text-white text-xl">
                ✕
            </button>

            <div className="w-full max-w-5xl aspect-video px-4">
                <iframe
                    className="w-full h-full rounded-xl"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

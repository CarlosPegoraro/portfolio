import { useEffect, useRef, useState } from "react";

import music from '@/assets/background.mp3'

export function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isMuted, setIsMuted] = useState(false);
    const [volume, setVolume] = useState(0.1);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = volume;

        audio
            .play()
            .catch(() => {
                // Alguns navegadores bloqueiam autoplay com som.
                // Nesse caso, a música só vai tocar após interação do usuário.
            });
    }, [volume]);

    const toggleMute = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.muted) {
            const restoredVolume = volume || 0.1;
            audio.volume = restoredVolume;
            audio.muted = false;
            setVolume(restoredVolume);
        } else {
            audio.muted = true;
        }
        setIsMuted(audio.muted);

        if (audio.paused) {
            audio.play().catch(() => {});
        }
    };

    const changeVolume = (newVolume: number) => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.volume = newVolume;
        audio.muted = newVolume === 0;
        setVolume(newVolume);
        setIsMuted(audio.muted);

        if (audio.paused && newVolume > 0) {
            audio.play().catch(() => {});
        }
    };

    return (
        <>
            <audio ref={audioRef} autoPlay loop>
                <source src={music} type="audio/mpeg" />
                Seu navegador não suporta áudio.
            </audio>

            <div className="flex items-center gap-2">
                <button type="button" onClick={toggleMute} aria-label={isMuted ? "Ativar música" : "Silenciar música"} className="rounded-md p-2 text-2xl transition hover:bg-cyan-950/60 hover:text-cyan-300">
                    {isMuted ? <i className="bi bi-volume-mute-fill"/> : <i className="bi bi-volume-up-fill"/>}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(event) => changeVolume(Number(event.target.value))}
                    aria-label="Volume da música"
                    className="h-1 w-20 cursor-pointer accent-cyan-400"
                />
            </div>
        </>
    );
}
